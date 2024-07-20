import React from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

export const Dropdown = () => {
    return(
        <div className='menuBox'>
            <nav>
                <ul>
                    <li><Link to={"/cucina"}>Cucina</Link></li>
                    <li><Link to={"/istruzione"}>Istruzione</Link></li>
                    <li><Link to={"/catalogo"}>Catalogo</Link></li>
                </ul>
            </nav>
        </div>
    );
}