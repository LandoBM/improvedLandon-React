import React from 'react';
import facePic from '../images/profile.jpeg'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <h1 style={{textAlign: 'center', backgroundColor:'green', color: 'white'}}>About Me</h1>
      <Container>
      <Row>
        <Col>
        <Image src={facePic} alt='Avatar' className='profilePic' roundedCircle style={{minHeight:'90vh', minWidth:'70vh'}}/>
        </Col>
        <Col>
          <p style={{fontFamily: 'serif'}}>
            <p>Hi, I'm Landon! </p>
            <p>I am a full-stack developer based in Atlanta, GA with experience in MERN Stack and more. 
            To make a long story short, I have skills to build websites that can help organizations address business challenges and meet their business needs.
            </p>
            <p>
              My schooling includes both Georgia Gwinnett College and Georgia Institute of Technology Full Stack Development BootCamp. After accomplishing my degree
              in Finance, I've decided to switch gears into the Tech world. The reason for switching career paths is due to my likeliness of innovation and creativity. With programming I am able to become more involved with the evolution of technology 
              and also show more of my creativity and express more than I could before. The shift was not easy in the beginning especially coming from knowing the bare minimum to now knowing more 
              than I thought was involved in programming. There were so many instances where I doubted myself while coding especially when something was not working, or I felt
              like I just wanted to give up but I had a wonderful support system and amazing cohorts whom kept the encouragement and held each other up. 
            </p>
            <p>
              Other than coding and building on my skill set, I am a lover of nature. I love hiking in the North Georgia Mountains, visiting different waterfalls, and going to the gym. Some would call me a gym rat, but I see it as a place to escape my reality. 
              I am a family guy and love dogs! I currently have a Yorkshire Terrior that goes by Bear. Bear's pronouns are he/him. I also enjoy tea and visiting coffee shops to work or code.  
            </p>
            {/* I have developed many types of front-end and back-end from a Dating Movie application to a You List it, and Sell it application.
            I like to craft solid and ascendable user friendly applications. */}
          </p>

        </Col>
      </Row>
      </Container>
      <div style={{backgroundColor:'green'}}>
        .
      </div>
    </div>
  );
}