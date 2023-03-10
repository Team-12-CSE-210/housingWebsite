import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> c3f967a (Merged main branch manually)
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='navigation-links'>
<<<<<<< HEAD
                <Link to="/"> Lysta </Link>
                <Link to="/rent"> Rent </Link>
                <Link to="/list"> List </Link>
                <Link to="/help"> Help </Link>
            </div>
            <div className='account-buttons'>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
=======
                <a href="/"> Lysta </a>
                <a href="/rent"> Rent </a>
                <a href="/list"> List </a>
                <a href="/help"> Help </a>
            </div>
            <div className='account-buttons'>
                <button>Login</button>
                <button>Register</button>
>>>>>>> c3f967a (Merged main branch manually)
            </div>
        </div>
    );
}

export default Header;