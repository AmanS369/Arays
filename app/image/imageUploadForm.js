import React, { useState } from 'react';
import Image from 'next/image';
import './ImageForm.css'; 

const ImageUploadForm = ({ onSubmit, onFilterSelect }) => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(image);
  };

  const handleFilterClick = (filter) => {
    onFilterSelect(filter);
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 pt-4 label-container">
            <label className="formbold-form-label formbold-form-label-2">
              {image ? image.name : "Upload Image"}
            </label>
            <div className="formbold-mb-5 formbold-file-input text-center"> {/* Center the input */}
              <input 
                required 
                type="file" 
                name="file" 
                id="file" 
                onChange={handleChange} 
                className="file-input" 
              />
              {image && (
                <div className="text-center">
                  <Image 
                    src={URL.createObjectURL(image)} 
                    alt="product_phot" 
                    height={200} 
                    width={400} 
                    className='img img-responsive' 
                  />
                </div>
              )}
              <label htmlFor="file" className="browse-button text-center"> {/* Center the button */}
                <div>
                  <span>Browse</span>
                </div>
              </label>
            </div>
          </div>
          <hr className="separator" /> {/* Separator line */}
          <div className="mb-3 button-container">
            <button className="btn btn-primary" onClick={() => handleFilterClick('invert')}>Invert</button>
            <button className="btn btn-primary" onClick={() => handleFilterClick('grayscale')}>Grayscale</button>
            <button className="btn btn-primary" onClick={() => handleFilterClick('png_convert')}>PNG to JPG</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;
