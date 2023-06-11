import React, { useState } from 'react';
import UploadButton from '../components/UploadImage';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = (file) => {
    // Handle file upload logic here
    setSelectedFile(file);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          color: '#333',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Upload your image
      </h1>
      <UploadButton onUpload={handleUpload} />
      {selectedFile && (
        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Selected Image:
          </h2>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            style={{
              maxWidth: '300px',
              maxHeight: '300px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
