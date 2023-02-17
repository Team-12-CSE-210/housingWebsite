import React from 'react';
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            
            <div className='navigation-links'>
                <a href="/"> <img src={require('../logo.png')} alt="" width={60} height={60} /> Lysta </a>
                <a href="/rent"> Rent </a>
                <a href="/list"> List </a>
                <a href="/help"> Help </a>
            </div>
            <div className='account-buttons'>
                <div class="col-md-3 col-sm-3 col-xs-6"> <a href="Signup" class="btn btn-sm animated-button victoria-one">Sign up</a> </div>
                <div class="col-md-3 col-sm-3 col-xs-6"> <a href="Login" class="btn btn-sm animated-button victoria-two">Login</a> </div>
            </div>
        </div>
    );
}

export default Header;