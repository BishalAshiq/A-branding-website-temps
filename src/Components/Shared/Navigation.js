import React from 'react';
import './Navigation.css';
import SearchBox from '../Shared/SearchBox';
import logo from '../../Images/Logo/Frame 2.png';
import { Nav } from 'react-bootstrap';
const Navigation = () => {
    return (
        <div>
            <div className='nav'>
            <h1>BRANDING</h1>
            <Nav className='routes'>
            <Nav.Item>
            <Nav.Link className='navLink' href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLink' eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className='navLink' eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className='navLink' eventKey="sign In">Sign In</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
            <div>
            {/* <SearchBox></SearchBox> */}
            </div>
        </div>
    );
};

export default Navigation;