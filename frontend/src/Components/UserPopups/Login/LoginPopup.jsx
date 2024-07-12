import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import CloseButton from '../media/close-circle.png';
import UserIcon from '../media/user.svg';
import Button from "../../InteractiveComponents";

export const LoginPopup = ({ inputType = "email", inputType1 = "password", toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const login = () => {
        if(email.length===0 || password.length===0){
            alert(`All fields must be compiled`);
        }else{
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('User', email);
            alert(`Logged in as: ${email}`);
        }
    }

    return (
        <div className="login-popup">
            <div className="imgWrapper">
                <img src={CloseButton} alt="Close Button" />
            </div>
            <div className="text-wrapper">
                <h1>Accedi</h1>
                <div className="line" />
            </div>
            <img className="user" alt="User" src={UserIcon} />
            <label className="label" htmlFor="input-1">
                Email
            </label>
            <input 
                className="field" 
                id="input-1" 
                placeholder="mariorossi@example.com" 
                type={inputType}
                onChange={handleEmailChange}
            />
            <label className="label" htmlFor="input-2">
                Password
            </label>
            <input 
                className="field" 
                id="input-2" 
                placeholder="•••••••" 
                type={inputType1} 
                onChange={handlePasswordChange}
            />
            <p className="password-dimenticata">
                <span className="span">Password dimenticata? </span>
                <span className="aLink">Clicca qui</span>
            </p>
            <Button text={"Accedi"} funct={login} />
            <p className="registrati">
                <span className="span">Non sei registrato? </span>
                <span className="aLink" onClick={toggleForm}>Clicca qui</span>
            </p>
        </div>
    );
};

LoginPopup.propTypes = {
    inputType: PropTypes.string,
    inputType1: PropTypes.string,
    toggleForm: PropTypes.func.isRequired,
};

export default LoginPopup;