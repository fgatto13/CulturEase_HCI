import React from 'react';
import './FinalPopUps.css'; 
import { PopUpContext } from '../PopUpContext';
import { useContext } from "react";
import Button from '../../InteractiveComponents';

const FinalPopUps = () => {
  const { message, showGreenContent, handleCloseFinalPopUp } = useContext(PopUpContext);

  const text = !showGreenContent && "red-text";
  const bg = !showGreenContent && "red-background";
  const color = (showGreenContent)? "#2A6364" : "#DA3535"

  const subtitle = "A presto con una nuova richiesta!"

  //{`close-popup ${text}`}

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className='boxPopUp'>
          <svg className={`close-popup ${text}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onClick={handleCloseFinalPopUp}>
            <path d="M15 25L25 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 25L15 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className='boxtext-popUp'>
            <label className={`title-popUp ${text}`}> {message} </label>
            <label className='sub-title-popUp'> {subtitle} </label>
          </div>
          <div className='boxbutton-popUp'>
            <Button className={`button-popUp ${bg}`} text='Chiudi' funct={handleCloseFinalPopUp}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPopUps;
