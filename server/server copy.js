const express = require('express');
const multer = require('multer');
const path = require('path');
const sharp = require("sharp");
const streamifier = require("streamifier");
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
  cloud_name: 'autoduka',
  api_key: '849231238438944',
  api_secret: 'B9xGaeJ2PDv8FF3UvhQE0WZe_OI'
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


app.post("/api/uploadddddimages", upload.any(), (req, res) => {
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

// Endpoint to handle image uploads
app.post("/api/uploadiiiimages", upload.any(), async (req, res) => {
  try {
    for (const file of req.files) {
      const originalUrl = req.body[file.fieldname]; // Get the original Cloudinary URL

      // Extract the public ID from the Cloudinary URL
      const publicId = originalUrl.split("/").slice(-1)[0].split(".")[0];

      // Download the original image to get dimensions
      const originalImageBuffer = await cloudinary.api.resource(publicId, {
        image_metadata: true,
      });

      const originalWidth = originalImageBuffer.width;
      const originalHeight = originalImageBuffer.height;

      // Resize the uploaded image to match original dimensions
      const resizedImageBuffer = await sharp(file.path)
        .resize(originalWidth, originalHeight)
        .toBuffer();

      // Upload resized image to Cloudinary and overwrite the original
      await cloudinary.uploader.upload_stream(
        {
          public_id: publicId,
          overwrite: true,
        },
        (error, result) => {
          if (error) throw error;
          console.log(`Replaced image: ${result.secure_url}`);
        }
      ).end(resizedImageBuffer);

      // Delete the local file
      fs.unlinkSync(file.path);
    }

    res.status(200).send("Images uploaded and replaced successfully!");
  } catch (error) {
    console.error("Error replacing images:", error);
    res.status(500).send("Failed to replace images. Please try again.");
  }
});



// Endpoint to handle image uploads
app.post("/api/uploadimages1", upload.any(), async (req, res) => {
  try {
    const files = req.files; // Uploaded files
    const fileMap = req.body; // File map with original URLs

    for (const file of files) {
      const originalUrl = fileMap[file.fieldname]; // Get the original URL

      // Retrieve dimensions of the original image
      const originalImageResponse = await axios.get(originalUrl, {
        responseType: "arraybuffer",
      });
      const originalImageBuffer = Buffer.from(originalImageResponse.data);
      const metadata = await sharp(originalImageBuffer).metadata();

      // Resize new image to match original dimensions
      const resizedImageBuffer = await sharp(file.buffer)
        .resize(metadata.width, metadata.height)
        .toBuffer();

      // Extract the public ID from the Cloudinary URL
      const publicId = originalUrl
        .split("/")
        .slice(-1)[0]
        .split(".")[0];

      // Overwrite the image in Cloudinary
      await cloudinary.uploader.upload_stream(
        {
          public_id: publicId,
          overwrite: true,
        },
        (error, result) => {
          if (error) throw error;
          console.log("Uploaded:", result.secure_url);
        }
      ).end(resizedImageBuffer);
    }

    res.status(200).json({ message: "Images updated successfully!" });
  } catch (error) {
    console.error("Error updating images:", error);
    res.status(500).json({ error: "Failed to update images." });
  }
});



app.post("/api/upload-images", upload.any(), async (req, res) => {
  try {
    const uploadPromises = req.files.map(async (file) => {
      const fileName = file.originalname.split(".")[0]; // Extract file name without extension
      const folder = "nairobirecliner"; // Replace with your Cloudinary folder name
      const publicId = `${folder}/${fileName}`; // Cloudinary public ID format

      // Step 1: Get current dimensions of the image from Cloudinary
      const existingImage = await cloudinary.api.resource(publicId);

      if (!existingImage) {
        throw new Error(`Image with public ID '${publicId}' not found in Cloudinary.`);
      }

      const { width, height } = existingImage; // Extract existing dimensions

      // Step 2: Upload the new file with the same dimensions
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder,
            public_id: fileName, // Replace the existing image with this ID
            overwrite: true,     // Ensure the existing image is replaced
            invalidate: true,    // Invalidate cached URLs
            transformation: [
              { width, height, crop: "fill" }, // Resize to match original dimensions
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        // Pass file buffer to Cloudinary upload stream
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
    });

    // Wait for all uploads to complete
    const results = await Promise.all(uploadPromises);
    res.status(200).json({
      message: "Images uploaded and replaced successfully, with dimensions preserved!",
      results,
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({
      message: "Failed to upload images. Please try again.",
      error: error.message,
    });
  }
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
