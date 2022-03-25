import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>The Rakkhosh</h1>
            <div className='links'>
            <a href="/home">Home</a>
            <a href="/foods">Foods</a>
            <a href="/hotel">Hotel</a>
            </div>
        </nav>
    );
};

export default Header;