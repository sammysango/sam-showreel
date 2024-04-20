import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const PortfolioBanner = () => {
  const gridRef = useRef(null);
  const [hoverCell, setHoverCell] = useState({ row: -1, col: -1 });
  const [rippleCells, setRippleCells] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const numCols = 10; // Define grid dimensions
  const numRows = 10;

  // Adjustable constants
  const initialDelay = 1500; // Initial delay before the first ripple in milliseconds
  const repeatInterval = 5000; // Interval to repeat the ripple effect in milliseconds
  const ripplePropagationSpeed = 150; // Speed of ripple propagation down the column in milliseconds
  const rippleEffectDuration = 300; // Duration ripple effect stays on each cell in milliseconds

  useEffect(() => {
    let moveTimer = null;

    const handleMouseMove = (e) => {
      setIsActive(true);
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const correctiveFactor = 2.15;
      const col = Math.floor((numCols * x) / rect.width);
      const row = Math.floor((numRows * y) / (rect.height * correctiveFactor));
      setHoverCell({ row, col });
      clearTimeout(moveTimer);
      moveTimer = setTimeout(() => {
        setIsActive(false);
        setHoverCell({ row: -1, col: -1 });
      }, 50);
    };

    const handleMouseLeave = () => {
      clearTimeout(moveTimer);
      setIsActive(false);
      setHoverCell({ row: -1, col: -1 });
    };

    const grid = gridRef.current;
    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    // Function to start ripples
    const startRipples = () => {
      for (let col = 0; col < numCols; col++) {
        setTimeout(
          () => {
            for (let row = 0; row < numRows; row++) {
              setTimeout(() => {
                setRippleCells((current) => [...current, { col, row }]);
                setTimeout(() => {
                  // Remove the ripple effect after the duration
                  setRippleCells((current) =>
                    current.filter(
                      (cell) => !(cell.col === col && cell.row === row),
                    ),
                  );
                }, rippleEffectDuration);
              }, row * ripplePropagationSpeed);
            }
          },
          (col * ripplePropagationSpeed) / 2,
        ); // Adjust delay between column starts
      }
    };

    // Start repeating ripples
    setTimeout(() => {
      startRipples();
      setInterval(startRipples, repeatInterval);
    }, initialDelay);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const calculateRadius = (row, col) => {
    const maxRadiusEffect = 35;
    const effectSpread = 15;
    let maxRadius = 0;

    if (hoverCell && hoverCell.row !== -1) {
      let dx = Math.abs(hoverCell.col - col);
      let dy = Math.abs(hoverCell.row - row);
      let distance = Math.sqrt(dx * dx + dy * dy);
      maxRadius = Math.max(
        maxRadius,
        maxRadiusEffect - distance * effectSpread,
      );
    }

    rippleCells.forEach((ripple) => {
      if (ripple.col === col && ripple.row === row) {
        let dx = 0;
        let dy = 0;
        let distance = Math.sqrt(dx * dx + dy * dy);
        maxRadius = Math.max(
          maxRadius,
          maxRadiusEffect - distance * effectSpread,
        );
      }
    });

    return maxRadius;
  };

  return (
    <div className={styles.banner} ref={gridRef}>
      <div className={styles.title}>PORTFOLIO</div>
      <div className={styles.grid}>
        {Array.from({ length: 100 }).map((_, index) => {
          const row = Math.floor(index / 10);
          const col = index % 10;
          const radius = calculateRadius(row, col);
          return (
            <div
              key={index}
              className={styles.square}
              style={{ borderRadius: `${radius}%` }}
            />
          );
        })}
      </div>
      <div className={styles.arrowContainer}>
        <svg
          className={styles.arrowSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.692 27.334"
        >
          <path
            d="M2,27.334c-.512,0-1.024-.195-1.414-.586-.781-.781-.781-2.047,0-2.828l10.277-10.277L.586,3.365c-.781-.781-.781-2.047,0-2.828C1.367-.245,2.633-.245,3.414.537l11.692,11.691c.375.375.586.884.586,1.414s-.211,1.039-.586,1.414L3.414,26.748c-.39.391-.902.586-1.414.586Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default PortfolioBanner;
