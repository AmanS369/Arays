import React from 'react'
import Link from 'next/link'
const Headers = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand" href="#">
    Arays
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/image">Images</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/docs">Document</a>
      </li>
     
    </ul>
  </div>
</nav>

  )
}

export default Headers
