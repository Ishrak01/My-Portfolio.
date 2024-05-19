"use client"
import { useState } from 'react';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://server.ishrakhasin.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadMessage('File uploaded successfully.');
      } else {
        setUploadMessage('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error:', error);
      setUploadMessage('Error uploading file.');
    }
  };

  return (
    <div>
      <h1>Upload CV</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default UploadPage;
