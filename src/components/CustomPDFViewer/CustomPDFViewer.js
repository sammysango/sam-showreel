import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './styles.module.css';

const changeBackgroundColor = (color) => {
    document.documentElement.style.setProperty('--rpv-core__inner-page-background-color', color);
};

const CustomPDFViewer = ({ file }) => {
    return (
        <div className={styles.viewerContainer}>
            <Worker workerUrl="/pdf.worker.min.js">
                <Viewer
                    fileUrl={file}
                    defaultScale={1.0}
                    onDocumentLoadSuccess={() => console.log("Document loaded successfully!")}
                    onDocumentLoadFail={(error) => console.log("Loading failed with error:", error)}
                    onError={(error) => console.log("Error during PDF rendering:", error)}
                />
            </Worker>
        </div>
    );
};

export default CustomPDFViewer;
