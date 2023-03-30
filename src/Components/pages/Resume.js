import React from 'react';
import resume from '../images/resume-gify.gif'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <img src={resume}/>
      </div>
      <a href='https://docs.google.com/document/d/e/2PACX-1vSHtDyiCTd43tK6iq7XQFLQVTISR2MlDj5p4jXegJ3s5Nb1s9Tedu_KeaMfoXPhg4C4skUFZ-CIlq_g/pub'>
        Click Here to View Resume
      </a>
    </div>
  );
}