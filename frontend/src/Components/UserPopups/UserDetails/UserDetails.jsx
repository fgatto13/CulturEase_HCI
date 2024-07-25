import React, { useContext } from "react";
import Button from "../../InteractiveComponents";
import '../styles/LoginPopup.css';
import useAuth from '../../../Hooks';
import LoginPopup from "../Login/LoginPopup";
import UserIcon from '../media/user.svg';
import AuthContext from "../../../context/AuthContext";

const UserDetails = () => {
    const { logout, isLoggedIn } = useAuth();
    const { updateIsAdmin } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
        updateIsAdmin(false);
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
