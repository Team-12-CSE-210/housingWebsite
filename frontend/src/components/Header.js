import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header(props) {
    const { currUser } = props;
    return (
        <div className='header'>
            <div className='navigation-links'>
                <Link to="/"> Lysta </Link>
                <Link to="/rent"> Rent </Link>
                <Link to="/list"> List </Link>
                <Link to="/help"> Help </Link>
            </div>
            <div className='account-buttons'>
                {currUser ? (
                    <Link to="/login">
                        <button>Hi {currUser}!</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;