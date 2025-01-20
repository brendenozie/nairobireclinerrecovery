import React, { useState } from "react";
import axios from "axios";
import "./UpdateImages.scss";

const imageSections = {
  banner: [
    {
      name: "Banner 1",
      fileName: "kaqk8ftwuynfnpgpy7ae.jpg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/kaqk8ftwuynfnpgpy7ae.jpg`,
    },
    {
      name: "Banner 2",
      fileName: "gg53pmnpe8j8ctmrtc9f.jpg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/gg53pmnpe8j8ctmrtc9f.jpg`,
    },
  ],
  whoweare: [
    {
      name: "Who We 1",
      fileName: "fkwzlingxdhhwncvs18k.jpg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/fkwzlingxdhhwncvs18k.jpg`,
    },
    {
      name: "Who We 2",
      fileName: "eba3a3kc8tdbikph5erp.jpg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/eba3a3kc8tdbikph5erp.jpg`,
    },
  ],
  watchus: [
    {
      name: "Watch us 1",
      fileName: "watchus1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/watchus1_l5ei4d.jpg`,
    },
    {
      name: "Watch us 2",
      fileName: "watchus2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/watchus2_wkasyw.jpg`,
    },
  ],
  washingrefilling: [
    {
      name: "Washing Refilling 1",
      fileName: "washingrefilling1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/WashingRefilling1_sywwgj.jpg`,
    },
    {
      name: "Washing Refilling 2",
      fileName: "washingrefilling2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/WashingRefilling2_cx43mc.jpg`,
    },
  ],
  Effortlessly: [
    {
      name: "Effortlessly 1",
      fileName: "Effortlessly1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/Effortlessly1_putnfk.jpg`,
    },
    {
      name: "Effortlessly 2",
      fileName: "Effortlessly2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/Effortlessly2_ptnh6x.jpg`,
    },
  ],
  sidebyside: [
    {
      name: "Side 1",
      fileName: "sidebyside1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/sidebyside1_ikkezl.jpg`,
    },
    {
      name: "Side 2",
      fileName: "sidebyside2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/sidebyside2_bhcmrk.jpg`,
    },
  ],
  refurbishing: [
    {
      name: "Refurbishing 1",
      fileName: "refurbishing1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/Refurbishing1_memhgo.jpg`,
    },
    {
      name: "Refurbishing 2",
      fileName: "refurbishing2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/Refurbishing2_cwqwcf.jpg`,
    },
  ],
  refillingonly: [
    {
      name: "Refilling Only 1",
      fileName: "RefillingOnly1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/RefillingOnly1_ejs1l4.jpg`,
    },
    {
      name: "Refilling Only 2",
      fileName: "RefillingOnly2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/RefillingOnly2_w0rviw.jpg`,
    },
  ],
  coverchangingrefilling: [
    {
      name: "Cover Changing 1",
      fileName: "CoverChanging1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/CoverChanging1_v22j1u.jpg`,
    },
    {
      name: "Cover Changing 2",
      fileName: "CoverChanging2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/CoverChanging2_imhidk.jpg`,
    },
  ],  
  sidebyside2: [
    {
      name: "Side 3",
      fileName: "sidebyside21.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/sidebyside21_xldu3o.jpg`,
    },
    {
      name: "Side 4",
      fileName: "sidebyside22.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/sidebyside22_kyxmcj.jpg`,
    },
  ],
  sofaservicing: [
    {
      name: "Sofa Servicing 1",
      fileName: "SofaServicing1.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing1_ep2uqw.jpg`,
    },
    {
      name: "Sofa Servicing 2",
      fileName: "SofaServicing2.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing2_ebaesy.jpg`,
    },
  ],
  sofaservicing3: [
    {
      name: "Sofa Servicing3 1",
      fileName: "SofaServicing31.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing31_jhw9mn.jpg`,
    },
    {
      name: "Sofa Servicing3 2",
      fileName: "SofaServicing32.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing32_im86fl.jpg`,
    },
  ],
  sofaservicing4: [
    {
      name: "Sofa Servicing4 1",
      fileName: "SofaServicing41.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing41_y6gre6.jpg`,
    },
    {
      name: "Sofa Servicing4 2",
      fileName: "SofaServicing42.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing42_dajsha.jpg`,
    },
  ],
  sofaservicing5: [
    {
      name: "Sofa Servicing5 1",
      fileName: "SofaServicing51.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing51_yjej4u.jpg`,
    },
    {
      name: "Sofa Servicing5 2",
      fileName: "SofaServicing52.jpeg",
      path: `https://res.cloudinary.com/autoduka/image/upload/v${Date.now()}/SofaServicing52_w6l803.jpg`,
    },
  ],
};

const UpdateImages = () => {
  const [selectedSection, setSelectedSection] = useState("washingrefilling"); // Default section
  const [updatedImages, setUpdatedImages] = useState({});
  const [originalDimensions, setOriginalDimensions] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({}); // Individual upload status

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    setUpdatedImages({});
  };

  const handleImageLoad = (fileName, width, height) => {
    setOriginalDimensions((prev) => ({
      ...prev,
      [fileName]: { width, height },
    }));
  };

  const resizeImage = (file, width, height) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          file.type
        );
      };

      img.onerror = () => reject(new Error("Failed to load image for resizing."));
      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e, fileName) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPEG or PNG images are allowed.");
      return;
    }

    const original = originalDimensions[fileName];
    if (original) {
      try {
        const resizedImage = await resizeImage(file, original.width, original.height);
        setUpdatedImages((prev) => ({
          ...prev,
          [fileName]: resizedImage,
        }));
      } catch (error) {
        console.error("Error resizing image:", error);
        alert("Failed to resize image. Please try again.");
      }
    }
  };

  const handleUpload = async () => {
    if (Object.keys(updatedImages).length === 0) {
      alert("Please select at least one image to replace.");
      return;
    }

    setLoading(true);
    const formData = new FormData();

    Object.entries(updatedImages).forEach(([fileName, file]) => {
      formData.append("files", file, fileName);
    });

    try {
      const response = await axios.post(
        "https://nairobireclinerrecovery.vercel.app/api/upload-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedPaths = response.data.results;
      if (!updatedPaths) {
        throw new Error("Unexpected response from the server.");
      }

      Object.entries(updatedPaths).forEach(([fileName, newPath]) => {
        imageSections[selectedSection].forEach((image) => {
          if (image.fileName === fileName) {
            image.path = newPath;
          }
        });
      });

      alert(response.data.message || "Images updated successfully!");
      setUpdatedImages({});
    } catch (error) {
      console.error("Error uploading images:", error);
      alert(
        error.response?.data?.message || "Failed to upload images. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const generateCacheBustedURL = (path) => `${path}?t=${Date.now()}`;

  return (
    <div className="update-images-container">
      <h2>Update Images</h2>

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

      <div className="image-grid">
        {imageSections[selectedSection].map(({ name, fileName, path }) => (
          <div key={fileName} className="image-wrapper">
            <h3>{name}</h3>
            <img
              src={generateCacheBustedURL(path)}
              alt={name}
              className="image-preview"
              onLoad={(e) =>
                handleImageLoad(fileName, e.target.naturalWidth, e.target.naturalHeight)
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

      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Changes"}
      </button>
    </div>
  );
};

export default UpdateImages;

