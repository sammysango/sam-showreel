import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const PortfolioBanner = () => {
  const gridRef = useRef(null);
  const [hoverCell, setHoverCell] = useState({ row: -1, col: -1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = gridRef.current.getBoundingClientRect();
      const numCols = 10;
      const numRows = 10;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const col = Math.floor((numCols * x) / rect.width);

      // Corrective factor, adjust this based on trial and error
      const correctiveFactor = 2.15; // Start with 1.2 and adjust as needed, can be <1 or >1

      const row = Math.floor((numRows * y) / (rect.height * correctiveFactor));

      setHoverCell({ row, col });
    };

    const handleMouseLeave = () => {
      setHoverCell({ row: -1, col: -1 }); // Reset on mouse leave
    };

    const grid = gridRef.current;
    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const calculateRadius = (row, col) => {
    if (hoverCell.row === -1 && hoverCell.col === -1) return 0; // Return to default when mouse is not over the grid
    const dx = Math.abs(hoverCell.col - col);
    const dy = Math.abs(hoverCell.row - row);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadiusEffect = 50;
    const effectSpread = 15;
    return Math.max(0, maxRadiusEffect - distance * effectSpread);
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
