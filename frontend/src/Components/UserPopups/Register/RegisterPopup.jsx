import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/LoginPopup.css";
import Button from "../../InteractiveComponents";
import ErrorMessage from "../ErrorMessage";
import { validateRegistration } from "../../utils/validationUtils";
import useAuth from "../../../Hooks";

export const RegisterPopup = ({ inputType = "email", inputType1 = "password", toggleForm }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const { register } = useAuth();

    const handleRegister = async () => {
        const { isValid, message } = validateRegistration(
            firstName, lastName, birthDate, email, confirmEmail, password, confirmPassword
        );

        if (isValid) {
            try {
                await register(email, password);
                alert(`Registered as: ${email}`);
                setError('');
                setIsErrorVisible(false); // Hide error message when registration is successful
            } catch (e) {
                setError(e.message);
                setIsErrorVisible(true); // Show error message when registration fails
            }
        } else {
            setError(message);
            setIsErrorVisible(true); // Show error message when registration fails
        }
    };

    const closeErrorMessage = () => {
        setIsErrorVisible(false);
    };

    return (
        <div className="login-popup" style={{ width: '50%' }}>
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
                        onChange={(e) => setFirstName(e.target.value)}
                        type='text'
                    />
                    <label className="label" htmlFor="input-1">
                        Cognome
                    </label>
                    <input
                        className="field"
                        placeholder="Rossi"
                        onChange={(e) => setLastName(e.target.value)}
                        type='text'
                    />
                    <label className="label" htmlFor="input-2">
                        Data di nascita
                    </label>
                    <input
                        className="field"
                        placeholder="01/01/2000"
                        onChange={(e) => setBirthDate(e.target.value)}
                        type='date'
                    />
                    <label className="label" htmlFor="input-2">
                        Sesso
                    </label>
                    <select className="field">
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="label" htmlFor="input-1">
                        Conferma Email
                    </label>
                    <input
                        className="field"
                        id="input-1"
                        placeholder="mariorossi@example.com"
                        type="email"
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                    <label className="label" htmlFor="input-2">
                        Password
                    </label>
                    <input
                        className="field"
                        id="input-2"
                        placeholder="•••••••"
                        type={inputType1}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label" htmlFor="input-2">
                        Conferma Password
                    </label>
                    <input
                        className="field"
                        id="input-2"
                        placeholder="•••••••"
                        type={inputType1}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>

            <Button text={"Registrati"} funct={handleRegister} />
            <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />

            <p className="registrati">
                <span className="span">Hai già un account? </span>
                <span className="aLink" onClick={toggleForm}>Accedi qui</span>
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
