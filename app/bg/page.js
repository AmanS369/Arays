"use client";
import React from 'react';
import { useState } from 'react';
import '../main.css';
import UploadForm from './upload';
import Layout from '@/components/Layout';
import Image from 'next/image';

const Page = () => {
  const [invertedImageUrl, setInvertedImageUrl] = useState(null);

  const handleSubmit = async (image, threshold) => {
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch(`https://arays-backend.vercel.app/api/v1/edit/b&w/${threshold}`, {
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
      a.download = 'BlacknWhite_image.png';
      a.click();
    } else {
      console.error('Please process an image first.');
    }
  };

  return (
    <>
      <Layout title="Arays">
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-5">
              <UploadForm onSubmit={handleSubmit} />
            </div>
            <div className="col-md-7">
              <div className="card w-75 p-3 text-center">
                <h1 className="welcome-text">Welcome!</h1>

                {invertedImageUrl && (
                  <>
                    <hr className="thin-separator" /> {/* Thin separator below Welcome */}
                    <div>
                      <Image
                        src={invertedImageUrl}
                        alt="Processed Image"
                        height={200}
                        width={400}
                        className="img img-responsive mx-auto d-block"
                      />
                      <hr className="thin-separator" /> 
                      <div className="button-container mt-3">
                        <button className="btn btn-primary" onClick={handlePreview}>
                          Preview
                        </button>
                        <button className="btn btn-primary" onClick={handleDownload}>
                          Download
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;
