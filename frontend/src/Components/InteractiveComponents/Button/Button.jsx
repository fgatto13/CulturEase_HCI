import React from "react";
import './Button.css';

function Button({text}){
    return(
        <button className="genericButton">
            {text}
        </button>
    );
}

export default Button;