"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateCursorPosition = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    // Check screen size and update the state
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set the initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen && typeof window !== "undefined") {
      window.addEventListener("mousemove", updateCursorPosition);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", updateCursorPosition);
      }
    };
  }, [isSmallScreen]);

  // Conditionally render the custom cursor for non-small screens
  if (isSmallScreen) return null;

  return (
    <motion.div
      className="custom-cursor pointer-events-none !mix-blend-screen fixed top-0 bg-neutral-700 left-0 w-5 h-5 rounded-full z-[999]"
      style={{
        mixBlendMode: "exclusion",
        x: cursorPosition.x + 16,
        y: cursorPosition.y + 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      animate={{ x: cursorPosition.x + 8, y: cursorPosition.y + 8 }}
    />
  );
};

export default CustomCursor;
