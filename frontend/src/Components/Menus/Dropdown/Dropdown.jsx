import React from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

export const Dropdown = () => {
    return(
        <div className='menuBox'>
            <nav>
                <ul>
                    <li><Link />Cucina</li>
                    <li><Link />Istruzione</li>
                </ul>
            </nav>
        </div>
    );
}