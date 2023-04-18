import {React} from 'react';
import { Button, Card, Row, Container } from 'react-bootstrap'
import Minder from '..//images/minder.gif'
import Notes from '../images/notes.gif'
import Chat from '../images/chat.png'
import Api from '../images/api.png'
import iWanna from '../images/iWanna.png'
import express from '../images/express.jpeg'

// const iWannasite = 'https://iwanna.herokuapp.com/'


export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1 style={{textAlign:'center', backgroundColor:'green'}}>Portfolio</h1>
     {/* <div className='container-fluid port'>
      <img src={css} alt='CSS' className='rounded float-end' />
      <div className='title'> 
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
     </div> */}
     <Container fluid>
      <Row col-md-6>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={iWanna} style={{maxHeight:'100%'}} />
          <Card.Body>
            <Card.Title>iWanna</Card.Title>
            <Card.Text>
            This application serves as a platform to view items for sale and 
            communicate with the seller to purchase any one of the items available for sale. 
            This application uses Node.js, Express.js, and MVC.
            </Card.Text>
            <Button variant="primary" href="https://iwanna.herokuapp.com/">
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/iWanna"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={Minder}/>
          <Card.Body>
            <Card.Title>Minder Dating</Card.Title>
            <Card.Text>
            This project contains an application that allows the user to create their ultimate movie playlist. 
            The application uses "The Movie Data Base" api to retrieve it's information. 
            The user is able to select a genre and is then presented with varying options with the choice to approve of the movie to have it added to their local storage and saved for later. 
            The user is also able to search via keyword for a movie as well. 
            Movie dating made easy.
            </Card.Text>
            <Button variant="primary" href="https://landobm.github.io/Minder-DatingwithMovies/">
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/Minder-DatingwithMovies"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      </Row>
      </Container>
      <Container fluid>
      <Row>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={Notes} />
          <Card.Body>
            <Card.Title>Professional Note Taker</Card.Title>
            <Card.Text>
            In this application, Express.js is utilized on the back end to promote the use of writing and saving notes on the front end. 
            Every note received will be saved and retrieved from the data JSON file.
            </Card.Text>
            <Button variant="primary" href="https://business-noter.herokuapp.com/">
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/business-notes"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={Chat} />
          <Card.Body>
            <Card.Title>Chat Social</Card.Title>
            <Card.Text>
              In this application REACT and socket.io is utilized to serve as a platform to chat with other users in real time. 
              MongoDB serves as the database used to store user information for signup/login also keeping up with previous conversation 
              the user had in another chat. 
            </Card.Text>
            <Button variant="primary" href='https://chat-social-4-6-22.herokuapp.com/'>
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/chatSocial-React"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      </Row>
      </Container>
      <Container fluid>
      <Row>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={Api} />
          <Card.Body>
            <Card.Title>Skynn</Card.Title>
            <Card.Text>
            In this application, it mocks the back-end of an e-commerce business that is highly organized with its, products, tags, and inventory. 
            This application uses Express.js, API, Sequelize, and MYSQL as the database.
            <br /><br />
            <h6>This is not a deployed site, this will contain a walkthrough video.</h6>
            </Card.Text>
            <Button variant="primary" href='https://drive.google.com/file/d/1sxcxXv4QEA5ILaeFYAwnoSaoQXBwzy5h/view'>
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/skynnbylandon"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Keeping Up With Tech</Card.Title>
            <Card.Text>
            This app is a CMS-style blog site similar to a Wordpress site, where developers can publish their 
            blog posts and comment on other developers’ posts as well. This app uses MVC paradigm in its architectural structure, 
            using Handlebars.js as the template language, Sequelize as the ORM, and the express-session npm package for authentication.
            </Card.Text>
            <Button variant="primary" href='https://keepingupwithtech.herokuapp.com/'>
              Go somewhere</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM/keepingupwithtech"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      </Row>
      </Container>
    </div>
  );
}