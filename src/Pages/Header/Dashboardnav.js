import React from 'react'
import { BsList } from "react-icons/bs";
import {Navbar,Nav,Form,Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
// import { logoutApi } from "../../Login/useApi";
import { useNavigate } from "react-router";
import { logoutApi } from '../../Store2/Login2/LoginSlice';


const Dashboardnav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutApi({navigate}));
  };

  return (
    <div className='dashnavbar' >
      <Navbar  expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="#"><h4>Edisonvalley</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><BsList style={{height:"30px", width:"30px"}} /></Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" search"
              aria-label="Search"
            />
           
          </Form>
          
          <button onClick={() => handleLogout()}>Log out</button>
        </Navbar.Collapse>
      </Container>
   
    </Navbar>
    </div>
  )
}

export default Dashboardnav