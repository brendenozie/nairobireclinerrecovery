const express = require('express');
const multer = require('multer');
const path = require('path');
const sharp = require("sharp");
const streamifier = require("streamifier");
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const port = 3007;
const dotenv = require('dotenv');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

const app = express();
// Apply CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET,
});

const imageSections = {
  banner: [
    {
      name: "Banner 1",
      fileName: "kaqk8ftwuynfnpgpy7ae.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/kaqk8ftwuynfnpgpy7ae.jpg",
    },
    {
      name: "Banner 2",
      fileName: "gg53pmnpe8j8ctmrtc9f.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/gg53pmnpe8j8ctmrtc9f.jpg",
    },
  ],
  whoweare: [
    {
      name: "Who We 1",
      fileName: "fkwzlingxdhhwncvs18k.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/fkwzlingxdhhwncvs18k.jpg",
    },
    {
      name: "Who We 2",
      fileName: "eba3a3kc8tdbikph5erp.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/eba3a3kc8tdbikph5erp.jpg",
    },
  ],
  watchus: [
    {
      name: "Watch us 1",
      fileName: "watchus1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/watchus1_l5ei4d.jpg",
    },
    {
      name: "Watch us 2",
      fileName: "watchus2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/watchus2_wkasyw.jpg",
    },
  ],
  washingrefilling: [
    {
      name: "Washing Refilling 1",
      fileName: "washingrefilling1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/WashingRefilling1_sywwgj.jpg",
    },
    {
      name: "Washing Refilling 2",
      fileName: "washingrefilling2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/WashingRefilling2_cx43mc.jpg",
    },
  ],
  Effortlessly: [
    {
      name: "Effortlessly 1",
      fileName: "Effortlessly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/Effortlessly1_putnfk.jpg",
    },
    {
      name: "Effortlessly 2",
      fileName: "Effortlessly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/Effortlessly2_ptnh6x.jpg",
    },
  ],
  sidebyside: [
    {
      name: "Side 1",
      fileName: "sidebyside1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/sidebyside1_ikkezl.jpg",
    },
    {
      name: "Side 2",
      fileName: "sidebyside2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/sidebyside2_bhcmrk.jpg",
    },
  ],
  refurbishing: [
    {
      name: "Refurbishing 1",
      fileName: "refurbishing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/Refurbishing1_memhgo.jpg",
    },
    {
      name: "Refurbishing 2",
      fileName: "refurbishing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/Refurbishing2_cwqwcf.jpg",
    },
  ],
  refillingonly: [
    {
      name: "Refilling Only 1",
      fileName: "RefillingOnly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/RefillingOnly1_ejs1l4.jpg",
    },
    {
      name: "Refilling Only 2",
      fileName: "RefillingOnly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/RefillingOnly2_w0rviw.jpg",
    },
  ],
  coverchangingrefilling: [
    {
      name: "Cover Changing 1",
      fileName: "CoverChanging1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/CoverChanging1_v22j1u.jpg",
    },
    {
      name: "Cover Changing 2",
      fileName: "CoverChanging2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/CoverChanging2_imhidk.jpg",
    },
  ],  
  sidebyside2: [
    {
      name: "Side 3",
      fileName: "sidebyside21.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/sidebyside21_xldu3o.jpg",
    },
    {
      name: "Side 4",
      fileName: "sidebyside22.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/sidebyside22_kyxmcj.jpg",
    },
  ],
  sofaservicing: [
    {
      name: "Sofa Servicing 1",
      fileName: "SofaServicing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing1_ep2uqw.jpg",
    },
    {
      name: "Sofa Servicing 2",
      fileName: "SofaServicing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing2_ebaesy.jpg",
    },
  ],
  sofaservicing3: [
    {
      name: "Sofa Servicing3 1",
      fileName: "SofaServicing31.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing31_jhw9mn.jpg",
    },
    {
      name: "Sofa Servicing3 2",
      fileName: "SofaServicing32.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing32_im86fl.jpg",
    },
  ],
  sofaservicing4: [
    {
      name: "Sofa Servicing4 1",
      fileName: "SofaServicing41.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing41_y6gre6.jpg",
    },
    {
      name: "Sofa Servicing4 2",
      fileName: "SofaServicing42.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing42_dajsha.jpg",
    },
  ],
  sofaservicing5: [
    {
      name: "Sofa Servicing5 1",
      fileName: "SofaServicing51.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing51_yjej4u.jpg",
    },
    {
      name: "Sofa Servicing5 2",
      fileName: "SofaServicing52.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/SofaServicing52_w6l803.jpg",
    },
  ],
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Find the correct section and fileName from imageSections
    let publicId = file.originalname.split(".")[0]; // Default to file's base name

    // Loop through sections to find a match
    Object.values(imageSections).forEach((section) => {
      const match = section.find((img) => img.fileName === file.originalname);
      if (match) {
        publicId = match.path.split("/").pop().split(".")[0]; // Extract public_id from the path
      }
    });

    return {
      resource_type: "image",
      format: "jpeg", // Force format to JPEG
      public_id: publicId,
      overwrite: true, // Replace existing image with the same name
    };
  },
});


// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     resource_type: "image",
//     format: async (req, file) => "jpeg", // Force format to JPEG
//     public_id: (req, file) => file.originalname.split(".")[0], // Use file name without extension
//     overwrite: true, // Ensure existing images are replaced
//   },
// });


const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"));
    }
  },
});

// app.post("/api/upload-images", upload.array("files"), async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ message: "No files uploaded." });
//     }

//     const uploadedFiles = req.files.map((file) => ({
//       fileName: file.originalname,
//       url: file.path,
//     }));

//     res.status(200).json({
//       message: "Images uploaded successfully!",
//       results: uploadedFiles,
//     });
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//     res.status(500).json({ message: "Image upload failed", error });
//   }
// });

app.post("/api/upload-images", upload.array("files"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded." });
    }

    const uploadedFiles = req.files.reduce((acc, file) => {
      acc[file.originalname] = file.path; // Map file name to new URL
      return acc;
    }, {});

    res.status(200).json({
      message: "Images uploaded successfully!",
      results: uploadedFiles,
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({ message: "Image upload failed", error });
  }
});



// Start server
app.listen(3007, () => {
  console.log("Server started on http://localhost:3007");
});
