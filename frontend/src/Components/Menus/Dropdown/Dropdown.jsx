import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Dropdown.css';

export const Dropdown = () => {

    const [isAdmin, setIsAdmin] = useState(false);

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
                    <li><Link to={"/catalogo"}>Catalogo</Link></li>
                </ul>
            </nav>
        </div>
    );
}