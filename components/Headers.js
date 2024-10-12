"use client";
import React, { useEffect }  from 'react';
import Link from 'next/link';
import './Headers.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Headers = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((module) => {
        console.log("Bootstrap JS loaded");
      })
      .catch((error) => {
        console.error("Error loading Bootstrap JS:", error);
      });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <a className="navbar-brand brand-name" href="#">
        Arays
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/" className="nav-link nav-text" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/image" className="nav-link nav-text">
              Images
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/docs" className="nav-link nav-text">
              Document
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
