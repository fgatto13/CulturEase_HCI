import React, { useState, useEffect } from 'react';
import './Header.css';
import logo1 from '../../Media/Logo.png';
import logo2 from '../../Media/LogoHeader2.png';
import User from '../../Media/user 2.png';
import Admin from '../../Media/campana.png';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Menus';
import NotifyBox from '../NotifyBox/NotifyBox';

function Header() {
    const [active, setActive] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showNotifyBox, setShowNotifyBox] = useState(false);

    useEffect(() => {
        const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
        setIsAdmin(adminStatus);
    }, []);

    function toggle() {
        setActive(!active);
    }

    function toggleNotifyBox() {
        setShowNotifyBox(!showNotifyBox);
    }

    return (
        <>
            <header>
                <div className="logoContainer">
                    <img src={logo1} alt="logo" className='headerLogo'/>
                    <img src={logo2} alt="logo header" className='headerImg'/>
                </div>
                <nav>
                    <ul>
                        {!isAdmin && <li>Fai richiesta</li>}
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/bacheca"}>Bacheca</Link></li>
                        <li><a href='#' onClick={toggle}>Servizi</a></li>
                        <li>
                            <Link to={ isAdmin? "#" : "/login"}>
                                <img 
                                    src={isAdmin ? Admin : User} 
                                    alt="userLogin" 
                                    className='headerImg' 
                                    onClick={isAdmin ? toggleNotifyBox : null}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {active && <Dropdown />}
            <NotifyBox isVisible={showNotifyBox} onClose={toggleNotifyBox} />
        </>
    );
}

export default Header;
