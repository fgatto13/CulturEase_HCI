import React, { useState, useEffect } from 'react';
import './NotifyBox.css';
import notificationsData from './notifiche.json'; 
import closeIcon from '../Media/close-circle.png';

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
                        <img src={closeIcon} className={'close-button'} alt='close' onClick={onClose}/>
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
