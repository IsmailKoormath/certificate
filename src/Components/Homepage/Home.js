import React from 'react'
import "./Home.css"
import { Button,Container,Form,Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../Loading/Loading';
const Home = () => {

  const [loading,setLoading]=useState(true)

  useEffect(() => {
   setTimeout(() => {
      setLoading(false);
    }, 1000)},[])

  return (
    <>
   {loading ? <LoadingSpinner/> :
    <div className='home'>
      
        
        <Navbar className="navbar"  expand="lg">
    <Container fluid>
      <Navbar.Brand className='nav-heading' href="#">EDISONVALLEY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="nav me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className="link" href="#action1">Home</Nav.Link>
          <Nav.Link className="link" href="#action2">About</Nav.Link>
          <Nav.Link className="link"  href="#action2">Features</Nav.Link>
          <Nav.Link className="link"  href="#action2">Team</Nav.Link>
          
          
        </Nav>
        <Form className="d-flex">
         
          <Button variant="outline-success">sign in</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div className="banner-container row">
        
        <Container  className=" col-12 col-sm-12 col-md-12  text-side">
          
          <h1>Make Your Career with EdisonValley</h1>
          <p>
            We are a bunch of tech enthusiasts determined to uplift the society
            utilising the latest technologies around us.
          </p>
          <Link to="/login">
          <Button>Login</Button>
          </Link>
        </Container>
  
        <Container className="image-side">
          <img src="https://i.pinimg.com/564x/31/10/8e/31108e8e2a419fe0e5627ea2c74bac24.jpg" alt='img' />
        </Container>
        
      </div>
       
      <div className="footer row">
      <Container fluid className="footer-text col-12 col-sm-12 col-md-12 col-lg-6">
        <h2>EDISONVALLEY</h2>
        <h5>
          2020 © Edisonvalley. Design & Develop by Osperb
          <br />
          We are a bunch of tech enthusiasts determined to <br />
          uplift the society utilising the latest technologies around us
        </h5>
      </Container>
      <Container className="footer-table col-12 col-sm-12 col-md-12 col-lg-6">
        <table>
          <tr>
            <th>Resources</th>
            <th>Company</th>
            <th>Social Links</th>
          </tr>
          <tr>
            <td>privacy policy</td>
            <td>About Us</td>
            <td><img src="https://assets.shortpedia.com/uploads/2020/11/21/1605936372.jpg?tr=w-720,ar-3-2,cm-pad_resize,bg-F3F3F3" alt="" /></td>
          </tr>
          <tr>
            <td>Terms & conditions</td>
            <td>Features</td>
          </tr>
        </table>
      </Container>
    </div>
       
       
    </div>}
    </>
  )
}

export default Home