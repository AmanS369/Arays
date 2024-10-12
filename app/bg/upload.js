import React, { useState } from 'react';
import Image from 'next/image';
import './BlackAndWhite.css';

const UploadForm = ({ onSubmit, onThresholdSelect }) => {
  const [image, setImage] = useState(null);
  const [threshold, setThreshold] = useState(128);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Reference to the hidden file input
  const fileInputRef = React.createRef();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setErrorMessage(''); // Clear error when an image is selected
  };

  // Programmatically trigger the file input click
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      setErrorMessage('No image selected. Please select an image.');
    } else {
      setErrorMessage(''); // Clear the error if the image is valid
      onSubmit(image, threshold);
    }
  };

  return (
    <div className="upload-form">
      <h2 className="text-center upload-label">Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 pt-4 text-center">
          <div className="form-file-input">
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              name="file"
              id="file"
              onChange={handleChange}
              style={{ display: 'none' }} // Hide the file input
            />
            {/* Custom Browse button */}
            <button
              type="button"
              className="btn modern-btn"
              onClick={handleBrowseClick}
            >
              Browse
            </button>
            {image && (
              <div className="text-center mt-3">
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  height={200}
                  width={400}
                  className="img img-responsive mx-auto d-block"
                />
              </div>
            )}
            {/* Error message for no image selected */}
            {errorMessage && (
              <div className="error-message mt-2">{errorMessage}</div>
            )}
          </div>
        </div>

        <hr className="separator" />

        <div className="mb-3 d-flex align-items-center justify-content-between">
          <h4 className="mb-0 threshold">Enter Threshold</h4>
          <input
            type="number"
            id="threshold"
            name="threshold"
            min="0"
            max="255"
            value={threshold}
            onChange={(e) => {
              setThreshold(e.target.value);
              onThresholdSelect(e.target.value);
            }}
            className="threshold-input"
            style={{ width: '60%', marginLeft: '10px' }}
          />
        </div>

        <hr className="separator" />

        <div className="mt-3 text-center">
          <button type="submit" className="btn modern-btn mb-3">
            Black & White
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
