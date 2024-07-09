import React from 'react';
import './Header.css';
import logo1 from '../../Media/Logo.png';
import logo2 from '../../Media/LogoHeader2.png';
import User from '../../Media/user 2.png';

function Header(){
    return(
        <header>
            <div className="logoContainer">
                <img src={logo1} alt="" className='headerLogo'/>
                <img src={logo2} alt="" className='headerImg'/>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Bacheca</a></li>
                    <li><a href="#">Servizi</a></li>
                    <li>
                        <a href="#">
                            <img src={User} alt="userLogin" className='headerImg'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;