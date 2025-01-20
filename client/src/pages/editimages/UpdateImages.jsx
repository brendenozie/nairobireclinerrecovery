import React, { useState } from "react";
import axios from "axios";
import "./UpdateImages.scss";

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


const UpdateImages = () => {
  const [selectedSection, setSelectedSection] = useState("washingrefilling"); // Default to 'washingrefilling'
  const [updatedImages, setUpdatedImages] = useState({});
  const [originalDimensions, setOriginalDimensions] = useState({});
  const [loading, setLoading] = useState(false); // Track loading state

  // Handle section change
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    setUpdatedImages({});
  };

  // Handle file selection with validation
  // const handleFileChange = (e, fileName) => {
  //   const file = e.target.files[0];
  //   if (file && file.size > 5 * 1024 * 1024) {
  //     alert("File size must be less than 5MB.");
  //     return;
  //   }
  //   if (file && !["image/jpeg", "image/png"].includes(file.type)) {
  //     alert("Only JPEG or PNG images are allowed.");
  //     return;
  //   }
  //   setUpdatedImages((prev) => ({
  //     ...prev,
  //     [fileName]: file,
  //   }));
  // };

  // Store dimensions of the original image
const handleImageLoad = (fileName, width, height) => {
  setOriginalDimensions((prev) => ({
    ...prev,
    [fileName]: { width, height },
  }));
};

// Function to resize image to match the original dimensions
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
      
      // Resize the canvas to the desired dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Draw the resized image on the canvas
      ctx.drawImage(img, 0, 0, width, height);
      
      // Get the resized image as a Blob
      canvas.toBlob((blob) => {
        resolve(blob);
      }, file.type);
    };
    
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file); // Convert image file to base64 for canvas
  });
};


// Handle file selection with validation and apply dimensions
// const handleFileChange = (e, fileName) => {
//   const file = e.target.files[0];
//   if (file && file.size > 5 * 1024 * 1024) {
//     alert("File size must be less than 5MB.");
//     return;
//   }
//   if (file && !["image/jpeg", "image/png"].includes(file.type)) {
//     alert("Only JPEG or PNG images are allowed.");
//     return;
//   }

//   // Set the selected image and store original dimensions
//   setUpdatedImages((prev) => ({
//     ...prev,
//     [fileName]: file,
//   }));
// };
const handleFileChange = async (e, fileName) => {
  const file = e.target.files[0];
  
  if (file && file.size > 5 * 1024 * 1024) {
    alert("File size must be less than 5MB.");
    return;
  }
  
  if (file && !["image/jpeg", "image/png"].includes(file.type)) {
    alert("Only JPEG or PNG images are allowed.");
    return;
  }

  // Get the original dimensions of the selected image
  const original = originalDimensions[fileName];
  if (original) {
    // Resize the selected image to match the original dimensions
    const resizedImage = await resizeImage(file, original.width, original.height);
    setUpdatedImages((prev) => ({
      ...prev,
      [fileName]: resizedImage, // Save resized image for upload
    }));
  }
};


// Adjust the uploaded image to match the dimensions of the current image
const getAdjustedDimensions = (fileName) => {
  const original = originalDimensions[fileName];
  return original ? { width: original.width, height: original.height } : {};
};

  // Store dimensions of the original image
  // const handleImageLoad = (fileName, width, height) => {
  //   setOriginalDimensions((prev) => ({
  //     ...prev,
  //     [fileName]: { width, height },
  //   }));
  // };

  // Handle upload
  const handleUpload = async () => {
  if (Object.keys(updatedImages).length === 0) {
    alert("Please select at least one image to replace.");
    return;
  }

  setLoading(true); // Show loader
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

    const updatedPaths = response.data.results; // Assuming backend returns updated image URLs
    Object.entries(updatedPaths).forEach(([fileName, newPath]) => {
      imageSections[selectedSection].forEach((image) => {
        if (image.fileName === fileName) {
          image.path = newPath; // Update path dynamically
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
    setLoading(false); // Hide loader
  }
};

  // const handleUpload = async () => {
  //   if (Object.keys(updatedImages).length === 0) {
  //     alert("Please select at least one image to replace.");
  //     return;
  //   }

  //   setLoading(true); // Show loader
  //   const formData = new FormData();
  //   Object.entries(updatedImages).forEach(([fileName, file]) => {
  //     // formData.append(fileName, file, fileName);
  //     formData.append("files", file, fileName);
  //   });

  //   try {
  //     const response = await axios.post(
  //       "https://nairobireclinerrecovery.vercel.app/api/upload-images",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     const updatedPaths = response.data.results; // Assuming backend returns updated image URLs
  //     Object.entries(updatedPaths).forEach(([fileName, newPath]) => {
  //       imageSections[selectedSection].forEach((image) => {
  //         if (image.fileName === fileName) {
  //           image.path = newPath; // Update path dynamically
  //         }
  //       });
  //     });

  //     alert(response.data.message || "Images updated successfully!");
  //     setUpdatedImages({});
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //     alert(
  //       error.response?.data?.message || "Failed to upload images. Please try again."
  //     );
  //   } finally {
  //     setLoading(false); // Hide loader
  //   }
  // };

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

      {/* // Inside the render logic */}
      {imageSections[selectedSection].map(({ name, fileName, path }) => (
        <div key={fileName} className="image-wrapper">
          <h3>{name}</h3>
          <img
            src={`${path}?t=${Date.now()}`}
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
                style={getAdjustedDimensions(fileName)}  // Apply adjusted dimensions
              />
            </div>
          )}
        </div>
      ))}
      {/* Inside the render logic */}
        {/* {imageSections[selectedSection].map(({ name, fileName, path }) => (
          <div key={fileName} className="image-wrapper">
            <h3>{name}</h3>
            <img
              src={path}
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
        ))} */}

       
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
