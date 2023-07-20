import React, { useState } from 'react';
import Image from 'next/image';
const UploadForm = ({ onSubmit,onthresholdSelec }) => {
  const [image, setImage] = useState(null);
  const [threshold, setthreshold] = useState(128);
  
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(image,threshold);
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
              <div className='mt-4'>
              </div>
            </label>
          </div>

        </div>
        <div className='mb-3'>
        <div>
      <div className='mb-3'>
      <label htmlFor="threshold"><h4>Enter Threshold</h4></label>
      </div>
      <input
        type="number"
        id="threshold"
        name="threshold"
        min="0"
        max="255"
        value={threshold}
        onChange={(e)=>{setthreshold(e.target.value)}}
      />
    </div>
       
        
        <div className='mt-3'><button className="btn btn-primary mb-3" >Black & White</button></div>
       
          </div>
         
          
        
      </form>
     <div>
     
     </div>
    </div>
    </div>
    
  );
};

export default UploadForm;
