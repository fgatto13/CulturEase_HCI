import React from "react";
import './Istruzione.css';
import elementsConfig from './school.json';
import { Header, Footer, GridScroll } from "../../Components";

function Istruzione(){
    return(
        <>
        <Header />
        <main className="mainIstruzione">
            <GridScroll elements={elementsConfig}/>
        </main>
        <Footer/>
        </>
    );
}

export default Istruzione;