import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import UserIcon from '../media/user.svg';
import Button from "../../InteractiveComponents";
import { validateCredentials } from "../../utils/validationUtils";
import ErrorMessage from "../ErrorMessage";
import useAuth from '../../../Hooks';  

export const LoginPopup = ({ inputType = "email", inputType1 = "password", toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const { login } = useAuth();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const { isValid, message } = validateCredentials(email, password);

        if (isValid) {
            try {
                const adminEmail = 'admin@example.com';
                const adminPassword = 'adminPassword1'; 

                if (email === adminEmail && password === adminPassword) {
                    sessionStorage.setItem('isAdmin', 'true');
                } else {
                    sessionStorage.setItem('isAdmin', 'false');
                    login(email, password);
                }
                sessionStorage.setItem('isLoggedIn', 'true');
                alert(`Logged in as: ${email}`);
                setError('');
                setIsErrorVisible(false); 
            } catch (e) {
                setError(e.message);
                setIsErrorVisible(true); 
            }
        } else {
            setError(message);
            setIsErrorVisible(true); 
        }
    };

    const closeErrorMessage = () => {
        setIsErrorVisible(false);
    };

    return (
        <div className="login-popup">
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
                <span className="aSpan">Password dimenticata? </span>
                <span className="aLink">Clicca qui</span>
            </p>

            <Button text={"Accedi"} funct={handleLogin} />

            <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />

            <p className="registrati">
                <span className="aSpan">Non sei registrato? </span>
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
