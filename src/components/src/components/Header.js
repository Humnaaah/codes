import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ArrowRight } from 'react-bootstrap-icons';
const Header =()=>{
    return(
        <div className="container header"> 
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Button className="default_Btn"> Contact Us <ArrowRight /></Button>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0 nav-list"
                    >
                        <Nav.Link href="#action1">About</Nav.Link>
                        <Nav.Link href="#action2">News</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">Our Team</Nav.Link>
                        <Nav.Link href="#action2">Make Enquiry</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
     </div>
    )
}
export default Header