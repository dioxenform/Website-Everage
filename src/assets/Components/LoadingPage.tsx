import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  // Colors for dark mode
  const primaryColor = "#1e90ff";
  const secondaryColor = "#2c2c2c";
  const backgroundColor = "#121212";
  const textColor = "#ffffff";

  return (
    <div
      className="loading-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: backgroundColor,
      }}
    >
      {/* Animated logo valve */}
      <motion.div
        style={{
          width: "120px",
          height: "120px",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        {/* Horizontal line */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "20px",
            backgroundColor: primaryColor,
            borderRadius: "10px",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        />

        {/* Valve knob */}
        <motion.div
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: primaryColor,
            border: `5px solid ${secondaryColor}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Handle */}
          <motion.div
            style={{
              position: "absolute",
              width: "10px",
              height: "30px",
              backgroundColor: secondaryColor,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "5px",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          color: textColor,
          marginBottom: "30px",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        Loading Your Valve Products...
      </motion.div>

      {/* Progress bar */}
      <motion.div
        style={{
          width: "250px",
          height: "8px",
          backgroundColor: secondaryColor,
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: primaryColor,
            borderRadius: "4px",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingPage;
