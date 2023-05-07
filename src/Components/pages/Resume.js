import React from 'react';
import resume from '../pages/Resume/LandonResume.pdf'
import {Container, Row, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Resume() {
  return (
    <div>
      <div>
        <h1 style={{textAlign:'center', backgroundColor:'green'}}> Tech Stack </h1>
        <Container fluid>
        <Row col-md-6>
        <h5 style={{textAlign:'center'}}>Front-End</h5>
        {['md'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className='my-2' style={{textAlign:'center'}}>
          <ListGroupItem>HTML</ListGroupItem>
          <ListGroupItem>CSS</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>Bootstrap</ListGroupItem>
          <ListGroupItem>jQuery</ListGroupItem>
          <ListGroupItem>Moment.js</ListGroupItem>
        </ListGroup>
        ))}
        </Row>
        <Row>
        <h5 style={{textAlign:'center'}}>Back-End</h5>
        {['lg'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className='my-2' style={{textAlign:'center'}}>
          <ListGroupItem>Node.js</ListGroupItem>
          <ListGroupItem>MySQL</ListGroupItem>
          <ListGroupItem>NoSQL</ListGroupItem>
          <ListGroupItem>Express.js</ListGroupItem>
          <ListGroupItem>Mongoose</ListGroupItem>
          <ListGroupItem>React.js</ListGroupItem>
          <ListGroupItem>APIs</ListGroupItem>
          <ListGroupItem>MVC</ListGroupItem>
          <ListGroupItem>Sequelize</ListGroupItem>
          <ListGroupItem>NPM</ListGroupItem>
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
        <h5 style={{textAlign:'center'}}>Software Systems</h5>
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
      <div style={{textAlign:'center', backgroundColor:'green'}}>
      <h4>Download Resume Here</h4>
      <a href={resume} style={{color:'black'}}>
        Landon's Resume
      </a>
      </div>
    </div>
  );
}