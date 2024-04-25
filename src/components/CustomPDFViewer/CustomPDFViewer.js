import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './styles.module.css';

const CustomPDFViewer = ({ file }) => {
    const basePath = window.location.hostname.includes('github.io') ? '/sam-showreel' : '';

    return (
        <div className={styles.viewerContainer}>
            <Worker workerUrl={`${basePath}/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={`${basePath}${file}`}
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
