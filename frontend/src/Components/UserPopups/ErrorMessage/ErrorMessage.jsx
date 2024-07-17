import PropTypes from "prop-types";
import React from "react";
import CloseButton from '../media/close-circle.png';
import "./ErrorMessage.css";

const ErrorMessage = ({ error, closeError }) => {
    return (
        error && (
            <div className={`error-message ${error ? 'open' : ''}`}>
                <div className="box">
                    <div className="imgWrapper" onClick={closeError}>
                        <img src={CloseButton} alt="Close Button" />
                    </div>
                    <p>
                        {error}
                    </p>
                </div>
            </div>
        )
    );
};

ErrorMessage.propTypes = {
    error: PropTypes.string,
    closeError: PropTypes.func.isRequired,
};

export default ErrorMessage;
