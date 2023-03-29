import React from 'react';
import facePic from '../images/face.jpeg'

export default function About() {
  return (
    <div>
      <h1>About Landon</h1>
      <img src={facePic} alt='Avatar'/>
      <p>
        Hello! My name is Landon Murray. I am a full-stack developer based in Atlanta,GA. 
        I have developed many types of front-end and back-end from a Dating Movie application to a You List it, and Sell it application.
        I like to craft solid and ascendable user friendly applications.
      </p>
    </div>
  );
}