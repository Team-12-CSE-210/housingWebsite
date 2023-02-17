import React from 'react';
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='navigation-links'>
                <a href="/"> Lysta </a>
                <a href="/rent"> Rent </a>
                <a href="/list"> List </a>
                <a href="/help"> Help </a>
            </div>
            <div className='account-buttons'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
}

export default Header;