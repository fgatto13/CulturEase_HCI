// Header.js
import React, { useState, useContext } from 'react';
import './Header.css';
import logo1 from '../../Media/Logo.png';
import logo2 from '../../Media/LogoHeader2.png';
import User from '../../Media/user 2.png';
import Admin from '../../Media/campana.png';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Menus';
import NotifyBox from '../NotifyBox/NotifyBox';
import { SideMenu } from '../Menus/SideMenu';
import AuthContext from '../../context/AuthContext';

function Header() {
    const [active, setActive] = useState(false);
    const [showNotifyBox, setShowNotifyBox] = useState(false);
    const { isAdmin } = useContext(AuthContext);

    const toggle = () => setActive(!active);
    const toggleNotifyBox = () => setShowNotifyBox(!showNotifyBox);

    return (
        <>
            <header>
                <div className="logoContainer">
                    <img src={logo1} alt="logo" className='headerLogo'/>
                    <img src={logo2} alt="logo header" className='headerImg'/>
                </div>
                <nav className='notResp'>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/bacheca"}>Bacheca</Link></li>
                        <li><a href='#' onClick={toggle}>Servizi</a></li>
                        {isAdmin &&
                        <li>
                            <Link to={"#"}>
                                <img 
                                    src={Admin} 
                                    alt="notification" 
                                    className='headerImg' 
                                    onClick={toggleNotifyBox}
                                />
                            </Link>
                        </li>
                        }
                        <li>
                            <Link to={"/login"}>
                                <img 
                                    src={User} 
                                    alt="userLogin" 
                                    className='headerImg' 
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <SideMenu admin={isAdmin}/>
            </header>
            {active && <Dropdown admin={isAdmin}/>}
            <NotifyBox isVisible={showNotifyBox} onClose={toggleNotifyBox} />
        </>
    );
}

export default Header;
