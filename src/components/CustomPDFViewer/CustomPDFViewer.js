import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import viewer styles
import styles from './styles.module.css'; // Import your custom styles

const CustomPDFViewer = ({ file }) => {
    // Check if the URL includes 'github.io' and prepend the repository name if it does
    const basePath = window.location.hostname.includes('github.io') ? '/your-repository-name' : '';

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
