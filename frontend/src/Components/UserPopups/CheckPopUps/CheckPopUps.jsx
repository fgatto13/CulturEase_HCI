import React from 'react';
import './CheckPopUps.css'; 
import { PopUpContext } from '../PopUpContext';
import { useContext } from "react";
import Button from '../../InteractiveComponents';

const subTitle = "Le modifiche apportate sono state salvate e puoi rivederle in seguito, se necessario.";

const CheckPopUps = () => {

    const { message, handleClosePopUp, handleOpenFinalPopUp } = useContext(PopUpContext);

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className='boxPopUp'>
           <svg className='close-popup' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onClick={handleClosePopUp}>
               <path d="M15 25L25 15" stroke="#2A6364" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M25 25L15 15" stroke="#2A6364" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           <div className='boxtext-popUp'>
             <label className='title-popUp'>{message}</label>
             <label className='sub-title-popUp'>{subTitle}</label>
           </div>
           <div className='boxbutton-popUp'>
              <Button className='button-popUp cancel-button' 
                      text='Cancella' 
                      funct={() => handleOpenFinalPopUp('Richiesta cancellata!',false)}></Button>
              <Button className='button-popUp' 
                      text='Conferma' 
                      funct={() => handleOpenFinalPopUp('Richiesta avvenuta con successo!',true)}></Button>
           </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckPopUps;