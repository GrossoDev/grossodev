import { useState, useEffect } from 'react';

function useScreenSize(canvas) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: canvas.current.clientWidth, height: canvas.current.clientHeight });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [canvas]);

  return windowSize;
}

export default useScreenSize;