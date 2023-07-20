import React, { useState } from 'react';
import Image from 'next/image';
const ImageUploadForm = ({ onSubmit,onFilterSelect }) => {
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
  
    <div className="formbold-main-wrapper ">
 
    <div className="formbold-form-wrapper">
      <form onSubmit={handleSubmit}>
        
        <div className="mb-6 pt-4">
          <label className="formbold-form-label formbold-form-label-2">
          {image ?image.name:"Upload Image"} 
          </label>
          <div className="formbold-mb-5 formbold-file-input">
            <input required type="file" name="file" id="file" 
           onChange={handleChange}
            />
            {image&&(
                  <div className="text-center">
                  
                    <Image src={URL.createObjectURL(image)} 
                    alt="product_phot" 
                    height={200}
                    width={400}
                    className='img img-responsive'
                    />
                  </div>
                )}
            <label htmlFor="file">
              <div>
           
                <span className="formbold-browse"> Browse </span>
              </div>
            </label>
          </div>

        </div>
        <div className='mb-3'>
       
        <div><button  className="btn btn-primary mt-3 mb-3"  onClick={() => handleFilterClick('invert')}>Invert</button></div>
        <div><button  className="btn btn-primary mb-3" onClick={() => handleFilterClick('grayscale')}>Grayscale</button></div>
      
        <div><button className="btn btn-primary mb-3" onClick={() => handleFilterClick('png_convert')}>PNG to JPG</button></div>
          </div>
         
          
        
      </form>
     <div>
     
     </div>
    </div>
    </div>
    
  );
};

export default ImageUploadForm;
