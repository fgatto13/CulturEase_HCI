import React from "react";
import './Button.css';

function Button({text, funct}){
    return(
        <button className="genericButton" onClick={funct}>
            {text}
        </button>
    );
}

export default Button;