import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../App.css'



const NavBar = () => {
    const [activeLink, setActiveLink ] = useState('home');
    const [scrolled, setScrolled] = useState(false);



    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onscroll)
    }, [])
    
    const onUpdateActiveClink=(value) => {
        setActiveLink(value);
    }


  return (
    


    <Navbar expand="lg"  className={scrolled ? "scrolled" : ""}>
        {/* <img src={""} alt='logo' /> */}
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"white"}} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-li'} onClick={() => onUpdateActiveClink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" style={{color:"white"}} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-li'}onClick={() => onUpdateActiveClink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" style={{color:"white"}} className={activeLink === 'project' ? 'active navbar-link' : 'navbar-li'}onClick={() => onUpdateActiveClink('project')}>Project</Nav.Link>     
                <span className='navbar-text'>
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="#"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}><span>lets connect</span></button>

                </span>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;


