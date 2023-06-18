import React from "react";
import axios from "axios";


const FileUpload = () => {
  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("image", file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post("http://localhost:8000/api/colorize-image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      .then((response) => {
		// handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };
  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <label
        htmlFor="file-upload"
        style={{
          backgroundColor: '#f1f1f1',
          border: '1px solid #ccc',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <input
          type="file"
          id="file-upload"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        Click here
      </label>
    </div>
  );
};
export default FileUpload;