import PropTypes from "prop-types";
import React from "react";
import "./LoginPopup.css";
import CloseButton from './close-circle.png';
import UserIcon from './user.png';
import Button from "../InteractiveComponents";

export const LoginPopup = ({ inputType = "email", inputType1 = "text" }) => {
    return (
    <div className="login-popup">
        <div className="imgWrapper">
            <img src={CloseButton} alt="" />
        </div>
        <div className="text-wrapper">
            <h1>Accedi</h1>
            <div className="line"/>
        </div>
        <img className="user" alt="User" src={UserIcon} />
        <label className="label" htmlFor="input-1">
            Email
        </label>
        <input className="field" id="input-1" placeholder="mariorossi@example.com" type={inputType} />
        <label className="label" htmlFor="input-2">
            Password
        </label>
        <input className="field" id="input-2" placeholder="•••••••" type={inputType1} />
        <p className="password-dimenticata">
            <span className="span">Password dimenticata? </span>
            <a className="aLink" href="#">Clicca qui</a>
        </p>
        <Button text={"Accedi"}/>
        <p className="registrati">
            <span className="span">Non ancora registrato? </span>
            <a className="aLink" href="#">Clicca qui</a>
        </p>
    </div>
    );
};

LoginPopup.propTypes = {
    inputType: PropTypes.string,
    inputType1: PropTypes.string,
};
