import React from "react";
import './Button.css';
import '../../UserPopups/CheckPopUps/CheckPopUps.css'

function Button({ text, funct, dis, className }) {
    return (
        <button className={`genericButton ${className}`} onClick={funct} disabled={dis}>
            {text}
        </button>
    );
}

export default Button;
