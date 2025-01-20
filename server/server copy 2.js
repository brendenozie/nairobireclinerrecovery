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

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    //folder: "nairobirecliner", // Cloudinary folder
    resource_type: "image",   // Specify resource type
    format: async (req, file) => "jpeg", // Force format to JPEG
    public_id: (req, file) => file.originalname.split(".")[0], // Use file name without extension
  },
});

const upload = multer({ storage });

// Upload images endpoint
app.post("/api/upload-images", upload.array("files"), async (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => ({
      fileName: file.originalname,
      path: file.path, // Cloudinary URL for the uploaded file
    }));

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
