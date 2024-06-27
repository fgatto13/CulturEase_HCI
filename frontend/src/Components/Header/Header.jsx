import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

function Header(){
    return(
        <div className='head'>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">click here</a></li>
                    <li><a href="#">click here</a></li>
                    <li><a href="#">click here</a></li>
                    <li><a href="#">click here</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;