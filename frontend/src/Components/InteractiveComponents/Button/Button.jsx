import React from "react";
import './Button.css';
import '../../UserPopups/CheckPopUps/CheckPopUps.css'

function Button({key, text, funct, dis, className }) {
    return (
        <button id={key} className={`genericButton ${className}`} onClick={funct} disabled={dis}>
            {text}
        </button>
    );
}

export default Button;
