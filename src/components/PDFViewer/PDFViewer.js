import React from 'react';
import styles from "./styles.module.css";

const PDFViewer = ({ pdf }) => {
    return (
      <div className={styles.pdfContainer}>
        <object data={pdf} type="application/pdf" className={styles.pdfObject}>
          <p>Your browser does not support PDFs. <a href={pdf}>Download the PDF</a>.</p>
        </object>
      </div>
    );
  };
  
  export default PDFViewer;
