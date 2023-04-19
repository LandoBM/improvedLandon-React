import React from 'react';
import resume from '../images/resume-gify.gif'
import {Container, Row, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Resume() {
  return (
    <div>
      <div>
        <h1> Tech Stack </h1>
        <Container fluid>
        <Row col-md-6>
        {['lg'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className='my-2' style={{textAlign:'center'}}>
          <ListGroupItem>HTML</ListGroupItem>
          <ListGroupItem>CSS</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>Express.js</ListGroupItem>
          <ListGroupItem>Node.js</ListGroupItem>
          <ListGroupItem>React.js</ListGroupItem>
          <ListGroupItem>MySQL</ListGroupItem>
          <ListGroupItem>MongoDB</ListGroupItem>
          <ListGroupItem>NoSQL</ListGroupItem>
          <ListGroupItem>MVC</ListGroupItem>
          <ListGroupItem>APIs</ListGroupItem>
        </ListGroup>
        ))}
        </Row>
        </Container>
        <h1></h1>
        <Container fluid>
        <Row col-md-6>
        {['md'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className='my-2'>
          <ListGroupItem>Git</ListGroupItem>
          <ListGroupItem>GitHub</ListGroupItem>
          <ListGroupItem>Command Line</ListGroupItem>
          <ListGroupItem>Heroku</ListGroupItem>
          <ListGroupItem>Bootstrap</ListGroupItem>
        </ListGroup>
        ))}
        </Row>
        </Container>
        <h1>Software Systems</h1>
        <Container fluid>
        <Row col-md-6>
        {['md'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className='my-2'>
          <ListGroupItem>MacOs</ListGroupItem>
        </ListGroup>
        ))}
        </Row>
        </Container>
      </div>
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