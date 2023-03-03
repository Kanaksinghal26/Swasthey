import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410_960_720.jpg",
  "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{
            position: "absolute",
            opacity: currentImageIndex === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            width: "100vw",
            height: "90vh",
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
