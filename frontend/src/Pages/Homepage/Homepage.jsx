import React from "react";
import { Header, Footer, Button } from "../../Components";
import '../../Styles/styles.css';
import './Homepage.css';

function Homepage(){
    return(
        <>
            <Header />
            <main>
                <div className="welcomeBox">
                    <h1>Benvenuti</h1>
                    <p>Questo è il sito ufficiale del centro accoglienza di Cervinara (AV)</p>
                    <Button />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Homepage;