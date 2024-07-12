import React from "react";
import './Catalogo.css';
import { Header, Footer } from "../../Components";
import elementsConfig from './catalogue.json'; // Adjust the path as necessary
import { GridLayout } from "../../Components";

export default function Catalogo(){
    return(
    <>
    <Header />
    <main className="catalogueMain">
       <GridLayout elements={elementsConfig}/>
    </main>
    <Footer />
    </>
    );
}