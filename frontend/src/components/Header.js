import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (

        <Navbar bg="dark" variant="dark" className='navpad'>
            <Container className='maxwidth'>
                <Navbar.Brand href="/">
                    {/* <img
                        alt="Lysta"
                        src={logo}
                        className="d-inline-block align-top"
                    />{' '} */}
                    Lysta
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/rent" className='text1'>Rent</Nav.Link>
                    <Nav.Link href="/list" className='text1'>List</Nav.Link>
                    <Nav.Link href="/help" className='text1'>Help</Nav.Link>
                </Nav>

                <div className='account-buttons'>
                    {/* <button className='account-buttons'>Login</button> */}
                    <Link to="/login" className='account-buttons' role='button'>
                        Login
                    </Link>
                    <Link to="/signup" className='account-buttons' role='button'>
                        Sign Up
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
}



export default Header;
