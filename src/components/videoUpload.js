import React, { useState } from 'react';
import axios from 'axios';
const VideoUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Send the video file to the backend for storage
    // You can use an HTTP library like Axios to send the file to the backend
    const formData = new FormData();
    formData.append('video', selectedFile);
    axios.post('http://localhost:8000/api/videos/upload', formData)
      .then(response => {
        // Handle successful upload
        console.log('Video uploaded successfully');
      })
      .catch(error => {
        // Handle upload error
        console.error('Error uploading video', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUploadForm;