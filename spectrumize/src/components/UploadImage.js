import React, { useRef } from 'react';

const UploadButton = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onUpload(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        style={{
          border: 'none',
          background: 'none',
          padding: '10px',
          borderRadius: '5px',
          color: '#fff',
          backgroundColor: '#333',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadButton;
