"use client"
import React from 'react'
import { useState } from 'react';
import '../main.css'
import ImageUploadForm from './ImageUploadForm';
import Layout from '@/components/Layout';
import Image from 'next/image';
const Page = () => {
  const [invertedImageUrl, setInvertedImageUrl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const handleSubmit = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch(`http://127.0.0.1:7000/api/v1/edit/${selectedFilter}`, {
        method: 'POST',
        body: formData,
      });
      if (response) {
        const invertedImage = await response.blob();
        setInvertedImageUrl(URL.createObjectURL(invertedImage));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handlePreview = () => {
    if (invertedImageUrl) {
      window.open(invertedImageUrl, '_blank');
    } else {
      console.error('Please process an image first.');
    }
  };
  const handleDownload = () => {
    if (invertedImageUrl) {
      const a = document.createElement('a');
      a.href = invertedImageUrl;
      a.download = 'Proccessed_image.png';
      a.click();
    } else {
      console.error('Please process an image first.');
    }
  };
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  return (
     <>
     <Layout title="Arays">
    <div className='container-fluid m-3 p-3 '>
    <div className='row'>
      <div className='col-md-5'><ImageUploadForm onSubmit={handleSubmit} onFilterSelect={handleFilterSelection} /></div>
      <div className='col-md-7'>
      <div className='card w-75 p-3'>
        <h1>Welcome </h1>
        {invertedImageUrl &&
        <div>
            <Image src={invertedImageUrl} 
                    alt="product_phot" 
                    height={200}
                    width={400}
                    className='img img-responsive'
                    />
                    <div>
                      <div className='mt-3'
                      >
                    <button className="btn btn-primary  " onClick={handlePreview}>Preview </button>
                    <br></br>
                   <button className="btn btn-primary mt-3"  onClick={handleDownload}>Download</button>
                   </div>
                      </div>                    
        </div>
        }            
      </div>
      </div> 
    </div>
  </div>
  </Layout>
  </>
  );
};
export default Page;




 
