import React from "react";
import Button from "../../InteractiveComponents";
import '../styles/LoginPopup.css';

const UserDetails = () =>{
    return(
        <div className="login-popup">
            <Button text={'Log Out'} funct={()=>{sessionStorage.setItem('isLoggedIn', 'false')}}/>
        </div>
    );
}

export default UserDetails;