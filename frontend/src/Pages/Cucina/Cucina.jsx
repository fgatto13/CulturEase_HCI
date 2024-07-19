import React from "react";
import './Cucina.css';
import elementsConfig from './kitchen.json';
import { Header, Footer, GridScroll } from "../../Components";

function Cucina(){
    return(
        <>
        <Header />
        <main className="mainCucina">
            <GridScroll elements={elementsConfig} />
        </main>
        <Footer />
        </>
    );
}

export default Cucina;