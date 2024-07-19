import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import CloseButton from '../media/close-circle.png';
import UserIcon from '../media/user.svg';
import Button from "../../InteractiveComponents";
import { validateCredentials } from "../../utils/validationUtils";
import ErrorMessage from "../ErrorMessage";
import useAuth from '../../../Hooks';  // Adjust the path as necessary

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
                await login(email, password);

                // Check if the email is the admin email
                const adminEmail = 'admin@example.com';
                const adminPassword = 'adminPassword'; // Replace with the actual admin password

                if (email === adminEmail && password === adminPassword) {
                    sessionStorage.setItem('isAdmin', 'true');
                } else {
                    sessionStorage.setItem('isAdmin', 'false');
                }
                sessionStorage.setItem('isLoggedIn', 'true');
                alert(`Logged in as: ${email}`);
                setError('');
                setIsErrorVisible(false); // Hide error message when login is successful
            } catch (e) {
                setError(e.message);
                setIsErrorVisible(true); // Show error message when login fails
            }
        } else {
            setError(message);
            setIsErrorVisible(true); // Show error message when login fails
        }
    };

    const closeErrorMessage = () => {
        setIsErrorVisible(false);
    };

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

            <Button text={"Accedi"} funct={handleLogin} />

            <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />

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
