import React from 'react';
import { useContext } from 'react';
import './ItemDetails.css';
import Button from '../InteractiveComponents';
import CheckPopUps from "../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../../context/PopUpContext";
import closeIcon from '../Media/close-circle.png';

const ItemDetails = ({ element, onClose, buttonDisplay, itemType }) => {
  const { showPopUp, showFinalPopUp, handleOpenPopUp } = useContext(PopUpContext);
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

  if (!element) return null;

  return (
    <div className="product-details-overlay">
      <div className="product-details">
        <div className="close-button-container">
          <img src={closeIcon} alt='close button' onClick={onClose}/>
        </div>
        <div className="image-section">
          <img src={element.image} alt={element.title} />
        </div>
        <div className="info-section">
          <h1 style={{textAlign: 'center'}}>{element.title}</h1>
          <p style={{textAlign: 'left'}}>{element.descrizione}</p>
          {itemType===1 &&
          <ul>
            <li><strong>Note:</strong> {element.note}</li>
            <li><strong>Taglia:</strong> {element.taglia}</li>
          </ul>
            }
          {!isAdmin && buttonDisplay && <Button text="Richiedi prodotto" 
                   funct={() => handleOpenPopUp(`sei sicuro di voler richiedere "${element.title}"? `)} />}
          {showPopUp && <CheckPopUps />}
          {showFinalPopUp && <FinalPopUps />}

        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
