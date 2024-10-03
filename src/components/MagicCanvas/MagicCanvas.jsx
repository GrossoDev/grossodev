import { useRef, useState, useEffect } from 'react';
import useScreenSize from './useScreenSize';

// eslint-disable-next-line react/prop-types
const MagicCanvas = ({ zIndex = 0, color = "#ffffff30", fpsLimit = 90, fadeInMs = 500, fadeInPower = 3.0 }) => {
  const canvasRef = useRef(null);
  const { width, height } = useScreenSize(canvasRef);
  const [drops, setDrops] = useState([]);
  
  // Define rain drop properties
  const dropCount = 100; // Number of rain drops
  const dropLength = 10; // Length of a rain drop
  const dropWidth = 2; // Width of a rain drop
  const speed = -0.1;
  const maxDepth = 2;
  const minDepth = 0.4;
  
  useEffect(() => {
    const newDrops = [];

    // Generate random positions for rain drops
    for (let i = 0; i < dropCount; i++) {
      newDrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * (maxDepth - minDepth) + minDepth,
      });
    }

    setDrops(newDrops);
  }, [canvasRef, width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const startTime = performance.now();

    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
    }

    // Function to draw a single rain drop
    const drawDrop = (drop) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      const invSquare = 1 / (drop.z * drop.z);

      ctx.arc(drop.x, drop.y, dropWidth * invSquare, 0, 2 * Math.PI);
      ctx.fill();
    };

    // Function to animate the rain
    const animateRain = () => {
      const elapsed = performance.now() - startTime;

      ctx.clearRect(0, 0, width, height); // Clear canvas for each frame
      ctx.globalAlpha = Math.min(Math.pow(elapsed / fadeInMs, fadeInPower), 1.0);

      // Draw each rain drop and update its position
      drops.forEach((drop) => {
        drawDrop(drop);
        drop.y += speed / drop.z; // Increase y for falling effect

        // Reset drop position when it falls off the bottom
        if (drop.y < -20) {
          drop.x = Math.random() * width;
          drop.y = height + dropLength;
          drop.z = Math.random() * (maxDepth - minDepth) + minDepth;
        }
      });

    };
    
    const interval = setInterval(() => requestAnimationFrame(animateRain), 1_000 / fpsLimit);

    return () => clearInterval(interval);
  }, [color, width, height, fpsLimit, drops, speed, fadeInMs, fadeInPower]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        height: "100%", 
        width: "100%",
        display: "block",
        zIndex: zIndex,
      }}
    />
  );
};

export default MagicCanvas;
