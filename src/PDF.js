import { pdfjs } from 'react-pdf';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const path = "/paper.pdf"
  return (
    <div>
      <Document
        file={path}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        <span onClick={()=> pageNumber > 1 ? setPageNumber(pageNumber-1):null}>
        &lt;
        </span>
        <span>Page {pageNumber} of {numPages}</span>
        <span onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
        &gt;
        </span>
      </p>
    </div>
  );
}

export default PDF;