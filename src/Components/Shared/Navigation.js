import React from 'react';
import './Navigation.css';
import SearchBox from '../Shared/SearchBox';
import signIn from '../../Images/Sign In/Frame 3.png'
import { Nav } from 'react-bootstrap';
const Navigation = () => {
    return (
        <div>
            <div className='nav' data-aos="fade-right">
            <h1>BRANDING</h1>
            <Nav className='routes' data-aos="fade-left">
            <Nav.Item>
            <Nav.Link className='navLink' eventKey="sign In">Sign In</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
            <div>
            <SearchBox></SearchBox>
            </div>
        </div>
    );
};

export default Navigation;