const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const app = express();
const port = 3007;
const dotenv = require('dotenv');

const uploadDir = path.join(__dirname, "../client/src/assets/img");



// Update multer's destination
const upload = multer({ dest: uploadDir });


// const upload = multer({ dest: "../client/src/assets/img/" });

dotenv.config(); // Load environment variables from .env file



const allowedOrigins = [
  'http://localhost:3006',
  'http://localhost:3006/',
  'http://localhost:3007',
  'http://localhost:3007/', // Development
  'https://graciousdayschool.vercel.app/' // Production
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};


// Apply CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CLOUDNAME= process.env.CLOUDNAME;
const CLOUDAPIKEY= process.env.CLOUDAPIKEY;
const CLOUDSECRET= process.env.CLOUDSECRET;

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'djjpfyknl',
  api_key: '164584725883366',
  api_secret: 'aSs_JB88IgRKKbe-Mpwl2xKIDI8'
});

const deleteFile = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new Error('Failed to delete file');
  }
};

// Set storage engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // Initialize upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB
// }).single('image');

// // Make the public folder accessible
// app.use('/public', express.static(path.join(__dirname, 'public')));


// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/api/home', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

app.post('/api/delete', async (req, res) => {
  const { publicId } = req.body;

  try {
    const result = await deleteFile(publicId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).send({ message: err.message });
//     }
//     res.send({ message: 'File uploaded successfully', filePath: `/public/uploads/${req.file.filename}` });
//   });
// });

// Endpoint to get list of uploaded images
app.get('/api/images', async (req, res) => {
  try {
    const { resources } = await cloudinary.api.resources({
      type: 'upload',
      //prefix: 'school/', // Optional: Specify folder name if you organize your images in folders
      max_results: 50, // Adjust as needed
      context: true
    });
    res.send(resources);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// API endpoint to handle file uploads
app.post("/api/uploadimages", upload.any(), (req, res) => {
  try {
    req.files.forEach((file) => {
      // Define the target directory and file path
      const targetDir = path.join(__dirname, "assets/img");
      const targetPath = path.join(targetDir, file.originalname);

      // Ensure the target directory exists
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Move the file to the target directory
      fs.renameSync(file.path, targetPath);
    });

    res.status(200).send("Images uploaded successfully!");
  } catch (error) {
    console.error("Error updating images:", error);
    res.status(500).send("Failed to upload images. Please try again.");
  }
});

// const uploadDir = path.join(__dirname, "../client/src/assets/img");


app.post("/api/upload-images", upload.any(), (req, res) => {
  try {
    req.files.forEach((file) => {
      const targetPath = path.join(uploadDir, file.originalname);

      // Ensure the directory exists
      const fs = require('fs'); // Ensure fs is imported
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.renameSync(file.path, targetPath);
    });
    res.status(200).send("Images uploaded successfully!");
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).send("Failed to upload images. Please try again.");
  }
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
