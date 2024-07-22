import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxRichieste from '../../BoxRichieste/BoxRichieste';
import './SideMenu.css';

const SideMenu = ({admin}) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleOpenBox = () => {
        setIsBoxVisible(true);
    };

    const handleCloseBox = () => {
        setIsBoxVisible(false);
    };

    const toggle = () => {
        if (!isMenuActive) {
            setIsCollapsed(true);
            setTimeout(() => setIsMenuActive(true), 500); // Start rotation after collapse
        } else {
            setIsMenuActive(false);
            setTimeout(() => setIsCollapsed(false), 500); // End collapse after rotation
        }
    };

    return (
        <>
            <div className={`burgerMenu ${isCollapsed ? 'collapse' : ''} ${isMenuActive ? 'openBurger' : ''}`} onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`SideMenu ${isMenuActive ? 'openMenu' : ''}`}>
                <nav className="reactive">
                    <ul>
                        {!admin && <li onClick={handleOpenBox}><Link>Fai richiesta</Link></li>}
                        <BoxRichieste isVisible={isBoxVisible} onClose={handleCloseBox} />
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/bacheca"}>Bacheca</Link></li>
                        {admin && <li><Link to={"/cucina"}>Cucina</Link></li>}
                        {admin &&<li><Link to={"/istruzione"}>Istruzione</Link></li>}
                        <li>
                            <Link to={"/login"}>
                                {sessionStorage.getItem('isLoggedIn') === 'true' ? 'Account' : 'Login'}
                            </Link>
                        </li>
                        <li><Link to={'/catalogo'}>Catalogo</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default SideMenu;


