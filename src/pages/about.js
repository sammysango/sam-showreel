import React from "react";
import CustomPDFViewer from "../components/CustomPDFViewer/CustomPDFViewer";

const AboutPage = () => {
  return (
    <div>
      <CustomPDFViewer file="/sam-sanger-cv-draft.pdf" />
    </div>
  );
};

export default AboutPage;
