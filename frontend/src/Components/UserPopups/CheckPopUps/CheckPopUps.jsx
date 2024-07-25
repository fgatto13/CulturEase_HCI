import React from 'react';
import './CheckPopUps.css'; 
import { PopUpContext } from '../../../context/PopUpContext';
import { useContext } from "react";
import Button from '../../InteractiveComponents';
import closeIcon from '../media/close-circle.png';

const subTitle = "Le modifiche apportate sono state salvate e puoi rivederle in seguito, se necessario.";

const CheckPopUps = () => {

    const { message, handleClosePopUp, handleOpenFinalPopUp } = useContext(PopUpContext);

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className='boxPopUp'>
           <img src={closeIcon} alt='close icon' className='close-popup' onClick={handleClosePopUp}/>
           <div className='boxtext-popUp'>
             <label className='title-popUp'>{message}</label>
             <label className='sub-title-popUp'>{subTitle}</label>
           </div>
           <div className='boxbutton-popUp'>
              <Button className='button-popUp cancel-button' 
                      text='Cancella' 
                      funct={() => handleOpenFinalPopUp('Operazione cancellata!',false)}></Button>
              <Button className='button-popUp' 
                      text='Conferma' 
                      funct={() => handleOpenFinalPopUp('Operazione avvenuta con successo!',true)}></Button>
           </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckPopUps;