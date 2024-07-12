import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import CloseButton from '../media/close-circle.png';
import UserIcon from '../media/user.svg';
import Button from "../../InteractiveComponents";

export const RegisterPopup = ({ inputType = "email", inputType1 = "password", toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const register = () => {
        // Implement registration logic here
        alert(`Registered as: ${email}`);
    }

    return (
        <div className="login-popup" style={{width: '50%'}}>
            <div className="imgWrapper">
                <img src={CloseButton} alt="Close Button" />
            </div>
            <div className="text-wrapper">
                <h1>Registrati</h1>
                <div className="line" />
            </div>
            <div className="formContainer">
                <div className="Form">
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
                    <label className="label" htmlFor="input-1">
                        Conferma Email
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
                    <label className="label" htmlFor="input-2">
                        Conferma Password
                    </label>
                    <input 
                        className="field" 
                        id="input-2" 
                        placeholder="•••••••" 
                        type={inputType1} 
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="Form">
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
                    <label className="label" htmlFor="input-1">
                        Conferma Email
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
                    <label className="label" htmlFor="input-2">
                        Conferma Password
                    </label>
                    <input 
                        className="field" 
                        id="input-2" 
                        placeholder="•••••••" 
                        type={inputType1} 
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            <Button text={"Registrati"} funct={register} />
            <p className="registrati">
                <span className="span">Hai già un account? </span>
                <a className="aLink" href="#" onClick={toggleForm}>Accedi qui</a>
            </p>
        </div>
    );
};

RegisterPopup.propTypes = {
    inputType: PropTypes.string,
    inputType1: PropTypes.string,
    toggleForm: PropTypes.func.isRequired,
};

export default RegisterPopup;