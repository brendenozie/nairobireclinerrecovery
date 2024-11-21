
import React, { useEffect, useRef, useState } from 'react';

import "./LazyVideo.styles.scss";
import videoFile from "../../assets/video/video.mp4";
 

const LazyVideo = ({ poster, alt }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVideoLoaded(true);
        observer.disconnect();
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className={`video-element ${isVideoLoaded ? 'loaded' : ''}`}
        controls
        preload="none"
        poster={poster}
      >
        {isVideoLoaded && <source src={videoFile} type="video/mp4" />}  {/* Use the imported local video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;


// const LazyVideo = ({ src, poster, alt }) => {
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       const [entry] = entries;
//       if (entry.isIntersecting) {
//         setIsVideoLoaded(true);
//         observer.disconnect();
//       }
//     });

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="video-container">
//       <video
//         ref={videoRef}
//         className={`video-element ${isVideoLoaded ? 'loaded' : ''}`}
//         controls
//         preload="none"
//         poster={poster}
//       >
//         {isVideoLoaded && <source src={src} type="video/mp4" />}
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default LazyVideo;

