import React, { useState, useEffect } from 'react';
import './NotifyBox.css';
import notificationsData from './notifiche.json'; 

const NotifyBox = ({ isVisible, onClose }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setNotifications(notificationsData);
    }, []);

    return (
        <>
            <div className={`overlay ${isVisible ? 'active' : ''}`} onClick={onClose}></div>
            <div className={`notify-box-wrapper ${isVisible ? 'active' : ''}`}>
                <div className="notify-box">
                    <div className="notify-header">
                        <h3>Notifiche</h3>
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>
                    <div className="notify-content">
                        {notifications.map((notification, index) => (
                            <div className="notification" key={index}>
                                <img src={notification.image} alt="user" className="notification-image" />
                                <div className="notification-text">
                                    <span className="notification-name">{notification.name}</span>
                                    <p className="notification-description">{notification.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotifyBox;
