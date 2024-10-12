import React from 'react';
import Head from 'next/head';
import './Footers.css'; 

const Footers = () => {
  return (
    <div>
      <Head>
        <title>Array</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>
      <footer className="footer">
        <div className="footerContent">
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/"> Arays</a>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
