import React from 'react';
import Link from 'next/link';
import './Headers.css'; // Import your custom CSS file

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <a className="navbar-brand brand-name" href="#">
        Arays
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link nav-text" href="/" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-text" href="/image">
              Images
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-text" href="/docs">
              Document
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
