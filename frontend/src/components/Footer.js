import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className = "footer">
            <a href = "/" className='home-link'> Lysta </a>
            <div className="line"> | </div>
            <a href = "/help"> Help </a>
        </div>
    );
}

export default Footer;