import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BoxRichieste from '../../BoxRichieste/BoxRichieste';
import './Dropdown.css';

export const Dropdown = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleOpenBox = () => {
        setIsBoxVisible(true);
    };

    const handleCloseBox = () => {
        setIsBoxVisible(false);
    };

    useEffect(() => {
        const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
        setIsAdmin(adminStatus);
    }, []);

    return(
        <div className='menuBox'>
            <nav>
                <ul>
                    {isAdmin && <li><Link to={"/cucina"}>Cucina</Link></li>}
                    {isAdmin &&<li><Link to={"/istruzione"}>Istruzione</Link></li>}
                    {!isAdmin && <li onClick={handleOpenBox}><Link>Fai richiesta</Link></li>}
                        <BoxRichieste isVisible={isBoxVisible} onClose={handleCloseBox} />
                    <li><Link to={"/catalogo"}>Catalogo</Link></li>
                </ul>
            </nav>
        </div>
    );
}