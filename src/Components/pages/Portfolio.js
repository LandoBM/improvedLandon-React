import React from 'react';
import css from '../images/css.jpeg'
import html from '../images/html.jpeg'
import mongoDB from '../images/mongoDB.jpeg'
import node from '../images/node.jpeg'
import reactPic from '../images/react.jpeg'
import express from '../images/express.jpeg'

const iWannasite = 'https://iwanna.herokuapp.com/'


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
     <div className='container-fluid port'>
      <img src={css} alt='CSS' className='rounded float-end' />
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://iwanna.herokuapp.com/">iWanna</a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/iWanna"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
     <div className='container-fluid port'>
      <img src={html} alt='CSS' className='rounded float-end' />
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://landobm.github.io/Minder-DatingwithMovies/">Minder Dating App</a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/Minder-DatingwithMovies"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
     <div className='container-fluid port'>
      <img src={mongoDB} alt='CSS' className='rounded float-end' />
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://business-noter.herokuapp.com/">Professional Note App</a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/business-notes"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
     <div className='container-fluid port'>
      <img src={node} alt='CSS' className='rounded float-end'/>
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://drive.google.com/file/d/1sxcxXv4QEA5ILaeFYAwnoSaoQXBwzy5h/view">SkynnByLandon</a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/skynnbylandon"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
     <div className='container-fluid port'>
      <img src={reactPic} alt='CSS' className='rounded float-end' />
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://landobm.github.io/password-generator/">Security Please Password Generator</a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/password-generator"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
     <div className='container-fluid port'>
      <img src={express} alt='CSS' className='rounded float-end' />
      <div className='title'> 
        {/* <h4>iWanna</h4> */}
      </div>
      <div className='overview'>
      <h4>
        <a href="https://github.com/LandoBM/keepingupwithtech">KeepingUpWithTech! </a>
        <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/keepingupwithtech"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
      </h4>
      </div>
     </div>
    </div>
  );
}