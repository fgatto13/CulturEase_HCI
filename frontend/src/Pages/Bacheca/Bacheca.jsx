import React from "react";
import { useContext, useState } from 'react';
import './Bacheca.css';
import { Header, Footer } from "../../Components";
import PropostaProgetto from "./Components/PropostaProgetto";
import PropostaSondaggio from "./Components/PropostaSondaggio";
import Messaggio from "./Components/Messaggio";
import datiBacheca from './datiBacheca.json';
import imgInvio from './image/imgInvio.jpg';
import user1 from './image/user1.jpg';
import Sidebar from "../../Components/Sidebar/Sidebar";
import { ErrorMessage } from "../../Components/UserPopups";

import CheckPopUps from "../../Components/UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../../Components/UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../../Components/UserPopups/PopUpContext";

const immagini = {
    user1: user1,
};

export default function BachecaPage() {

    const { showPopUp, showFinalPopUp, handleOpenPopUp } = useContext(PopUpContext);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const handleSubmit = () => {
        if(message===''){
            setError("Devi scrivere qualcosa per poter inviare il messaggio...");
            setIsErrorVisible(true);
        }else{
            handleOpenPopUp('Sicuro di voler inviare il messaggio?');
            setError('');
            setIsErrorVisible(false);
        }
    }

    const closeErrorMessage = () => {
        setIsErrorVisible(false);
      };

    return (
        <>
            <Header />
            <main>
                <div className="areaBacheca">
                    <div className="scroll-container">
                        {datiBacheca.proposteProgetto.map((proposta, index) => (
                            <PropostaProgetto
                                key={index}
                                classe={proposta.classe}
                                image={immagini[proposta.image]}
                                nome={proposta.nome}
                                descrizione={proposta.descrizione}
                            />
                        ))}

                        {datiBacheca.proposteSondaggio.map((sondaggio, index) => (
                            <PropostaSondaggio
                                key={index}
                                classe={sondaggio.classe}
                                image={immagini[sondaggio.image]}
                                descrizione={sondaggio.descrizione}
                                opzione1={sondaggio.opzione1}
                                opzione2={sondaggio.opzione2}
                            />
                        ))}

                        {datiBacheca.messaggi.map((messaggio, index) => (
                            <Messaggio
                                key={index}
                                classe={messaggio.classe}
                                image={immagini[messaggio.image]}
                                messaggio={messaggio.messaggio}
                            />
                        ))}
                        <div className="inputBacheca">
                            <input 
                                type="text" 
                                className="invioInput" 
                                placeholder="Condividi i tuoi pensieri con tutta la community..." 
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button onClick={handleSubmit}><img className="invioimg" src={imgInvio} alt="ImgInvio" /></button>
                        </div>
                    </div>
                    <div className="sidebar-container">
                        <Sidebar />
                    </div>
                </div>

                {showPopUp && <CheckPopUps />}
                {showFinalPopUp && <FinalPopUps />}

                <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />

            </main>
            <Footer />
        </>
    );
}
