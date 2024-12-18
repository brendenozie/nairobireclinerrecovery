import React, { useState } from "react";
import axios from "axios";
import "./UpdateImages.scss";

const imageSections = {
  banner: [
    {
      name: "Banner 1",
      fileName: "Banner1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734543363/kaqk8ftwuynfnpgpy7ae.jpg",
    },
    {
      name: "Banner 2",
      fileName: "Banner2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734543363/gg53pmnpe8j8ctmrtc9f.jpg",
    },
  ],
  whoweare: [
    {
      name: "Who We 1",
      fileName: "whoweare1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734542805/fkwzlingxdhhwncvs18k.jpg",
    },
    {
      name: "Who We 2",
      fileName: "whoweare2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734542804/eba3a3kc8tdbikph5erp.jpg",
    },
  ],
  watchus: [
    {
      name: "Watch us 1",
      fileName: "watchus1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534077/watchus1_l5ei4d.jpg",
    },
    {
      name: "Watch us 2",
      fileName: "watchus2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534078/watchus2_wkasyw.jpg",
    },
  ],
  washingrefilling: [
    {
      name: "Washing Refilling 1",
      fileName: "washingrefilling1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534129/WashingRefilling1_sywwgj.jpg",
    },
    {
      name: "Washing Refilling 2",
      fileName: "washingrefilling2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534128/WashingRefilling2_cx43mc.jpg",
    },
  ],
  Effortlessly: [
    {
      name: "Effortlessly 1",
      fileName: "Effortlessly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534205/Effortlessly1_putnfk.jpg",
    },
    {
      name: "Effortlessly 2",
      fileName: "Effortlessly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534206/Effortlessly2_ptnh6x.jpg",
    },
  ],
  sidebyside: [
    {
      name: "Side 1",
      fileName: "sidebyside1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534248/sidebyside1_ikkezl.jpg",
    },
    {
      name: "Side 2",
      fileName: "sidebyside2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534249/sidebyside2_bhcmrk.jpg",
    },
  ],
  refurbishing: [
    {
      name: "Refurbishing 1",
      fileName: "refurbishing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534310/Refurbishing1_memhgo.jpg",
    },
    {
      name: "Refurbishing 2",
      fileName: "refurbishing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534312/Refurbishing2_cwqwcf.jpg",
    },
  ],
  refillingonly: [
    {
      name: "Refilling Only 1",
      fileName: "RefillingOnly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534351/RefillingOnly1_ejs1l4.jpg",
    },
    {
      name: "Refilling Only 2",
      fileName: "RefillingOnly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534353/RefillingOnly2_w0rviw.jpg",
    },
  ],
  coverchangingrefilling: [
    {
      name: "Cover Changing 1",
      fileName: "CoverChanging1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534394/CoverChanging1_v22j1u.jpg",
    },
    {
      name: "Cover Changing 2",
      fileName: "CoverChanging2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534392/CoverChanging2_imhidk.jpg",
    },
  ],  
  sidebyside2: [
    {
      name: "Side 3",
      fileName: "sidebyside21.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534502/sidebyside21_xldu3o.jpg",
    },
    {
      name: "Side 4",
      fileName: "sidebyside22.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534504/sidebyside22_kyxmcj.jpg",
    },
  ],
  sofaservicing: [
    {
      name: "Sofa Servicing 1",
      fileName: "SofaServicing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534558/SofaServicing1_ep2uqw.jpg",
    },
    {
      name: "Sofa Servicing 2",
      fileName: "SofaServicing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534560/SofaServicing2_ebaesy.jpg",
    },
  ],
  sofaservicing3: [
    {
      name: "Sofa Servicing3 1",
      fileName: "SofaServicing31.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534599/SofaServicing31_jhw9mn.jpg",
    },
    {
      name: "Sofa Servicing3 2",
      fileName: "SofaServicing32.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534601/SofaServicing32_im86fl.jpg",
    },
  ],
  sofaservicing4: [
    {
      name: "Sofa Servicing4 1",
      fileName: "SofaServicing41.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534634/SofaServicing41_y6gre6.jpg",
    },
    {
      name: "Sofa Servicing4 2",
      fileName: "SofaServicing42.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534636/SofaServicing42_dajsha.jpg",
    },
  ],
  sofaservicing5: [
    {
      name: "Sofa Servicing5 1",
      fileName: "SofaServicing51.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534683/SofaServicing51_yjej4u.jpg",
    },
    {
      name: "Sofa Servicing5 2",
      fileName: "SofaServicing52.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534681/SofaServicing52_w6l803.jpg",
    },
  ],
};

const UpdateImages = () => {

  const [selectedSection, setSelectedSection] = useState("washingrefilling"); // Default to 'washingrefilling'
  const [updatedImages, setUpdatedImages] = useState({});
  const [originalDimensions, setOriginalDimensions] = useState({});

  // Handle section change
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    setUpdatedImages({});
  };

  // Handle file selection
  const handleFileChange = (e, fileName) => {
    setUpdatedImages((prev) => ({
      ...prev,
      [fileName]: e.target.files[0],
    }));
  };

  // Store dimensions of original image
  const handleImageLoad = (fileName, width, height) => {
    setOriginalDimensions((prev) => ({
      ...prev,
      [fileName]: { width, height },
    }));
  };

  // Handle upload
  const handleUpload = async () => {
    if (Object.keys(updatedImages).length === 0) {
      alert("Please select at least one image to replace.");
      return;
    }

    const formData = new FormData();
    Object.entries(updatedImages).forEach(([fileName, file]) => {
      formData.append(fileName, file, fileName);
    });

    try {
      await axios.post("http://127.0.0.1:3007/api/upload-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Images updated successfully!");
      window.location.reload(); // Refresh to show updated images
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  return (
    <div className="update-images-container">
      <h2>Update Images</h2>

      {/* Section Selector */}
      {/* Section Selector */}
      <label className="section-selector">
        <span>Select Section:</span>
        <select value={selectedSection} onChange={handleSectionChange}>
          {Object.keys(imageSections).map((section) => (
            <option key={section} value={section}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </option>
          ))}
        </select>
      </label>

      {/* Images for Selected Section */}
      <div className="image-grid">
        {imageSections[selectedSection].map(({ name, fileName, path }) => (
          <div key={fileName} className="image-wrapper">
            <h3>{name}</h3>
            <img
              src={path}
              alt={name}
              className="image-preview"
              onLoad={(e) =>
                handleImageLoad(
                  fileName,
                  e.target.naturalWidth,
                  e.target.naturalHeight
                )
              }
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, fileName)}
              accept="image/*"
            />
            {updatedImages[fileName] && (
              <div className="preview-wrapper">
                <h4>Selected Replacement:</h4>
                <img
                  src={URL.createObjectURL(updatedImages[fileName])}
                  alt={`New ${name}`}
                  className="image-preview"
                  style={{
                    width: originalDimensions[fileName]?.width || "auto",
                    height: originalDimensions[fileName]?.height || "auto",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="upload-button" onClick={handleUpload}>
        Upload Changes
      </button>
    </div>
  );
};

export default UpdateImages;
