import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltedCard = ({children,customCSS}) => {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values to track cursor position
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  // Function to handle mouse movement
  function handleMouseMove(event) {
    if (cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();

      // Calculate the center of the card
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Get mouse position relative to the center of the card
      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    }
  }

  // Define the rotation limits and spring physics
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), {
    stiffness: 100,
    damping: 10,
    mass: 1,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), {
    stiffness: 100,
    damping: 10,
    mass: 1,
  });

  // Reset values when the mouse leaves the element
  function handleMouseLeave() {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
    setIsHovering(false);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovering(true)}
      style={{
        rotateX: isHovering ? rotateX : 0,
        rotateY: isHovering ? rotateY : 0,
        // Add a slight scale effect on hover for more depth
        scale: isHovering ? 1.05 : 1, 
        // Add a smooth transition for the scale and reset animation
        transition: { type: "spring", stiffness: 100, damping: 10 },
      }}
      className={`tilted-card ${customCSS}`}// Use a CSS class for styling
    >
      <div className="card-content">
       {children}
      </div>
    </motion.div>
  );
};

export default TiltedCard;
