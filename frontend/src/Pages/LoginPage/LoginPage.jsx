import React from "react";
import './LoginPage.css';
import { Header, Footer, LoginPopup } from "../../Components";

function LoginPage(){
    return(
        <>
        <Header />
        <main className="loginPage">
            <LoginPopup />
        </main>
        <Footer />
        </>
    );
}

export default LoginPage;