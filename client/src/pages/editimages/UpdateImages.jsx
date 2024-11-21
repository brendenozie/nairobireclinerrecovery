import React, { useState } from "react";
import axios from "axios";
import "./UpdateImages.scss";

import Banner1 from "../../assets/img/Banner1.jpeg";
import Banner2 from "../../assets/img/Banner1.jpeg";
import whoweare1 from "../../assets/img/whoweare1.jpeg";
import whoweare2 from "../../assets/img/whoweare2.jpeg";
import watchus1 from "../../assets/img/watchus1.jpeg";
import watchus2 from "../../assets/img/watchus2.jpeg";
import WashingRefilling1 from "../../assets/img/WashingRefilling1.jpeg";
import WashingRefilling2 from "../../assets/img/WashingRefilling2.jpeg";
import Effortlessly1 from "../../assets/img/Effortlessly1.jpg";
import Effortlessly2 from "../../assets/img/Effortlessly2.jpg";
import sidebyside1 from "../../assets/img/sidebyside1.jpeg";
import sidebyside2 from "../../assets/img/sidebyside2.jpeg";
import Refurbishing1 from "../../assets/img/Refurbishing1.jpeg";
import Refurbishing2 from "../../assets/img/Refurbishing2.jpeg";
import RefillingOnly1 from "../../assets/img/RefillingOnly1.jpeg";
import RefillingOnly2 from "../../assets/img/RefillingOnly2.jpeg";
import CoverChanging1 from "../../assets/img/CoverChanging1.jpeg";
import CoverChanging2 from "../../assets/img/CoverChanging2.jpeg";
import sidebyside21 from "../../assets/img/sidebyside21.jpeg";
import sidebyside22 from "../../assets/img/sidebyside22.jpeg";
import SofaServicing1 from "../../assets/img/SofaServicing1.jpeg";
import SofaServicing2 from "../../assets/img/SofaServicing2.jpeg";
import SofaServicing31 from "../../assets/img/SofaServicing31.jpeg";
import SofaServicing32 from "../../assets/img/SofaServicing32.jpeg";
import SofaServicing41 from "../../assets/img/SofaServicing41.jpeg";
import SofaServicing42 from "../../assets/img/SofaServicing42.jpeg";
import SofaServicing51 from "../../assets/img/SofaServicing51.jpeg";
import SofaServicing52 from "../../assets/img/SofaServicing52.jpeg";

const imageSections = {
  banner: [
    { name: "Banner 1", fileName: "Banner1.jpeg", path: Banner1 },
    { name: "Banner 2", fileName: "Banner2.jpeg", path: Banner2 },
  ],
  whoweare: [
    { name: "Who We 1", fileName: "whoweare1.jpeg", path: whoweare1 },
    { name: "Who We 2", fileName: "whoweare2.jpeg", path: whoweare2 },
  ],
  watchus: [
    { name: "Watch us 1", fileName: "watchus1.jpeg", path: watchus1 },
    { name: "Watch us 2", fileName: "watchus2.jpeg", path: watchus2 },
  ],
  washingrefilling: [
    { name: "Washing Refilling 1", fileName: "washingrefilling1.jpeg", path: WashingRefilling1 },
    { name: "Washing Refilling 2", fileName: "washingrefilling2.jpeg", path: WashingRefilling2 },
  ],
  Effortlessly: [
    { name: "Effortlessly 1", fileName: "Effortlessly1.jpeg", path: Effortlessly1 },
    { name: "Effortlessly 2", fileName: "Effortlessly2.jpeg", path: Effortlessly2 },
  ],
  sidebyside: [
    { name: "Side 1", fileName: "sidebyside1.jpeg", path: sidebyside1 },
    { name: "Side 2", fileName: "sidebyside2.jpeg", path: sidebyside2 },
  ],
  refurbishing: [
    { name: "Refurbishing 1", fileName: "refurbishing1.jpeg", path: Refurbishing1 },
    { name: "Refurbishing 2", fileName: "refurbishing2.jpeg", path: Refurbishing2 },
  ],
  refillingonly: [
    { name: "Refilling Only 1", fileName: "Refurbishing1.jpeg", path: RefillingOnly1 },
    { name: "Refilling Only 2", fileName: "RefillingOnly2.jpeg", path: RefillingOnly2 },
  ],
  sidebyside2: [
    { name: "Side 3", fileName: "sidebyside21.jpeg", path: sidebyside21 },
    { name: "Side 4", fileName: "sidebyside22.jpeg", path: sidebyside22 },
  ],
  coverchangingrefilling: [
    { name: "Cover Changing 1", fileName: "CoverChanging1.jpeg", path: CoverChanging1 },
    { name: "Cover Changing 2", fileName: "CoverChanging2.jpeg", path: CoverChanging2 },
  ],
  sofaservicing: [
    { name: "Sofa Servicing 1", fileName: "SofaServicing1.jpeg", path: SofaServicing1 },
    { name: "Sofa Servicing 2", fileName: "SofaServicing2.jpeg", path: SofaServicing2 },
  ],
  sofaservicing3: [
    { name: "Sofa Servicing3 1", fileName: "SofaServicing31.jpeg", path: SofaServicing31 },
    { name: "Sofa Servicing3 2", fileName: "SofaServicing32.jpeg", path: SofaServicing32 },
  ],
  sofaservicing4: [
    { name: "Sofa Servicing4 1", fileName: "SofaServicing41.jpeg", path: SofaServicing41 },
    { name: "Sofa Servicing4 2", fileName: "SofaServicing42.jpeg", path: SofaServicing42 },
  ],
  sofaservicing5: [
    { name: "Sofa Servicing5 1", fileName: "SofaServicing51.jpeg", path: SofaServicing51 },
    { name: "Sofa Servicing5 2", fileName: "SofaServicing52.jpeg", path: SofaServicing52 },
  ],
};

// Configuration: Map sections to their image paths
// const imageSections = {
//   banner: [
//     { name: "Banner Image 1", fileName: "banner1.jpeg", path: require("../../assets/img/1br.jpeg") },
//     { name: "Banner Image 2", fileName: "banner2.jpeg", path: require("../../assets/img/2br.jpeg") },
//   ],
//   comparison: [
//     { name: "Before Image", fileName: "before1.jpeg", path: require("../../assets/img/3br.jpeg") },
//     { name: "After Image", fileName: "after1.jpeg", path: require("../../assets/img/4br.jpeg") },
//     { name: "Before Image 2", fileName: "before2.jpeg", path: require("../../assets/img/5br.jpeg") },
//     { name: "After Image 2", fileName: "after2.jpeg", path: require("../../assets/img/6br.jpeg") },
//   ],
// };

const UpdateImages = () => {
  const [selectedSection, setSelectedSection] = useState("washingrefilling"); // Default to 'banner' section
  const [updatedImages, setUpdatedImages] = useState({}); // Store selected files for upload

  // Handle section change
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    setUpdatedImages({}); // Reset selected images
  };

  // Handle file selection
  const handleFileChange = (e, fileName) => {
    setUpdatedImages((prev) => ({
      ...prev,
      [fileName]: e.target.files[0],
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
            <img src={path} alt={name} className="image-preview" />
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
