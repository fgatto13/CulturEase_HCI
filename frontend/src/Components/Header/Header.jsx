import { React, useState } from 'react';
import './Header.css';
import logo1 from '../../Media/Logo.png';
import logo2 from '../../Media/LogoHeader2.png';
import User from '../../Media/user 2.png';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Menus';

function Header(){
    const [active, setActive] = useState(false);
    function toggle(){
        setActive(!active);
    }
    return(
        <>
        <header>
            <div className="logoContainer">
                <img src={logo1} alt="" className='headerLogo'/>
                <img src={logo2} alt="" className='headerImg'/>
            </div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/bacheca"}>Bacheca</Link></li>
                    <li><a href='#' onClick={()=>{toggle()}}>Servizi</a></li>
                    <li>
                        <Link to={"/login"}>
                            <img src={User} alt="userLogin" className='headerImg'/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        {active && (
            <Dropdown />
        )}
        </>
    );
}

export default Header;