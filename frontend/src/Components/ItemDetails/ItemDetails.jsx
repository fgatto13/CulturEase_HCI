import React from 'react';
import { useContext } from 'react';
import './ItemDetails.css';
import Button from '../InteractiveComponents';
import CheckPopUps from "../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../UserPopups/PopUpContext";

const ItemDetails = ({ element, onClose }) => {
  const { showPopUp, showFinalPopUp, handleOpenPopUp } = useContext(PopUpContext);
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

  if (!element) return null;

  return (
    <div className="product-details-overlay">
      <div className="product-details">
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="image-section">
          <img src={element.image} alt={element.title} />
        </div>
        <div className="info-section">
          <h1>{element.title}</h1>
          <p>{element.descrizione}</p>
          <p><strong>Note:</strong> {element.note}</p>
          <p><strong>Taglia:</strong> {element.taglia}</p>

          {!isAdmin && <Button text="Richiedi prodotto" 
                   funct={() => handleOpenPopUp(`sei sicuro di voler richiedere "${element.title}"? `)} />}
          {showPopUp && <CheckPopUps />}
          {showFinalPopUp && <FinalPopUps />}

        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
