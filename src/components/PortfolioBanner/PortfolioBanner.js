import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const PortfolioBanner = ({ bgColor = "teal", textColor = "white" }) => {
  const gridRef = useRef(null);
  const [hoverCell, setHoverCell] = useState({ row: -1, col: -1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = gridRef.current;
      const rect = grid.getBoundingClientRect();
      const numCols = 10;
      const numRows = 10;
  
      // Calculate mouse position relative to the visible part of the grid
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Calculate the hovered cell based on mouse position
      const col = Math.floor((numCols * x) / rect.width);
      const row = Math.floor((numRows * y) / rect.height);
  
      setHoverCell({ row, col });
    };
  
    const grid = gridRef.current;
    grid.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);  

  const calculateRadius = (row, col) => {
    const dx = Math.abs(hoverCell.col - col);
    const dy = Math.abs(hoverCell.row - row);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadiusEffect = 50; // The maximum radius effect (in percent)
    const effectSpread = 10; // This determines how quickly the effect spreads; smaller values mean a wider spread
    return Math.max(0, maxRadiusEffect - distance * effectSpread);
  };

  return (
    <div className={styles.banner} ref={gridRef} style={{ color: textColor }}>
      <div className={styles.title} style={{ color: textColor }}>
        PORTFOLIO
      </div>
      <div className={styles.grid}>
        {Array.from({ length: 100 }).map((_, index) => {
          const row = Math.floor(index / 10);
          const col = index % 10;
          const radius = calculateRadius(row, col);
          return (
            <div
              key={index}
              className={styles.square}
              style={{ borderRadius: `${radius}%`, backgroundColor: bgColor }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioBanner;
