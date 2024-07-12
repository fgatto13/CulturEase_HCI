import React from "react";
import { useState } from "react";
import './LoginPage.css';
import { Header, Footer, LoginPopup, RegisterPopup } from "../../Components";

function LoginPage(){
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering(prevState => !prevState);
    }

    return(
        <>
            <Header />
            <main className="loginPage">
                {isRegistering ? 
                    <RegisterPopup toggleForm={toggleForm} /> :
                    <LoginPopup toggleForm={toggleForm} />
                }
            </main>
            <Footer />
        </>
    );
}

export default LoginPage;