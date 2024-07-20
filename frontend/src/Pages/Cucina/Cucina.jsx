import React from "react";
import './Cucina.css';
import elementsConfig from './kitchen.json';
import { Header, Footer, GridScroll } from "../../Components";

function Cucina(){
    return(
        <>
        <Header />
        <main className="mainCucina">
            <h1 className="ksh1">Proposte in cucina</h1>
            <GridScroll elements={elementsConfig} />
        </main>
        <Footer />
        </>
    );
}

export default Cucina;