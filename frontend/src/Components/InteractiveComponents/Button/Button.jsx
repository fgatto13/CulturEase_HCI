import React from "react";
import './Button.css';

function Button({text, funct, dis}){
    return(
        <button className="genericButton" onClick={funct} disabled={dis}>
            {text}
        </button>
    );
}

export default Button;