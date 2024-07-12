import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import CloseButton from '../media/close-circle.png';
import Button from "../../InteractiveComponents";

export const RegisterPopup = ({ inputType = "email", inputType1 = "password", toggleForm }) => {
    const [email, setEmail] = useState('');
    // eslint-disable-next-line
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
                        Nome
                    </label>
                    <input 
                        className="field"
                        placeholder="Mario" 
                        type='text'
                    />
                    <label className="label" htmlFor="input-1">
                        Cognome
                    </label>
                    <input 
                        className="field"
                        placeholder="Rossi" 
                        type='text'
                    />
                    <label className="label" htmlFor="input-2">
                        Data di nascita
                    </label>
                    <input 
                        className="field"
                        placeholder="01/01/2000" 
                        type='date'
                    />
                    <label className="label" htmlFor="input-2">
                        Sesso
                    </label>
                    <select 
                        className="field"
                    >
                        <option value="0">Maschio</option>
                        <option value="1">Femmina</option>
                        <option value="2">Non specificato</option>
                    </select>
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
                        type="email"
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
                <span className="aLink"onClick={toggleForm}>Accedi qui</span>
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