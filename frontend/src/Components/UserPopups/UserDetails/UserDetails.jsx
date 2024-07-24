import React from "react";
import Button from "../../InteractiveComponents";
import '../styles/LoginPopup.css';
import useAuth from '../../../Hooks';
import LoginPopup from "../Login/LoginPopup";
import UserIcon from '../media/user.svg';

const UserDetails = () => {
    const { logout, isLoggedIn } = useAuth();

    const handleLogout = () => {
        logout();
    };
    if (!isLoggedIn) {
        return <LoginPopup/>;
    }

    return (
        <div className="login-popup">
            <img src={UserIcon} alt="usr" />
            <Button text={'Log Out'} funct={handleLogout} />
        </div>
    );
}

export default UserDetails;
