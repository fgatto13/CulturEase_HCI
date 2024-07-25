import React, { useState, useContext, useEffect } from 'react';
import './AddProduct.css';
import Button from '../InteractiveComponents';
import CheckPopUps from "../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../UserPopups/PopUpContext";
import { validateAddProductForm } from '../utils/validationUtils';
import elementsConfig from '../../Pages/Catalogo/catalogue.json';
import { ErrorMessage } from '../UserPopups';


const AddProductForm = ({ onClose }) => {
  const { showPopUp, showFinalPopUp, showGreenContent, handleOpenPopUp } = useContext(PopUpContext);
  const messagePopUp = "Sei sicuro di voler aggiungere il prodotto?";

  const [productName, setProductName] = useState('');
  const [isUsed, setIsUsed] = useState(false);
  const [note, setNote] = useState('');
  const [size, setSize] = useState('');
  const [error, setError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const prevShowFinalPopUpRef = React.useRef(showFinalPopUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {isValid, message} = validateAddProductForm(productName, note);
    if (isValid) {
        setError('');
        setIsErrorVisible(false); 
        handleOpenPopUp(messagePopUp);
    } else {
        setError(message);
        setIsErrorVisible(true); 
    }
  };

  const closeErrorMessage = () => {
    setIsErrorVisible(false);
  };

  useEffect(() => {

    if (prevShowFinalPopUpRef.current === true && showFinalPopUp === false) {
        if(showGreenContent){

            const element = {image: '', title: {productName}, isUsed, note, size};
            elementsConfig = [...elementsConfig, element];
            console.log(elementsConfig);
            

            setProductName('');
            setIsUsed(false);
            setNote('');
            setSize('');
        }
        onClose();
    }

    prevShowFinalPopUpRef.current = showFinalPopUp;
  }, [showFinalPopUp, onClose, productName, isUsed, note, size]);

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
      <div className="title-form">
        <h2>Dettagli prodotto</h2>
      </div>
      <div className="form-group">
        <label htmlFor="productName">Nome Prodotto</label>
        <input
          type="text"
          id="productName"
          placeholder="Felpa Nike"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="toggle-container">
          <span className="toggle-label">Usato?</span>
          <input
            type="checkbox"
            checked={isUsed}
            onChange={() => setIsUsed(!isUsed)}
          />
          <span className="slider"></span>
        </label>
      </div>
      
      <div className="form-group">
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="size">Taglia</label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        >
          <option value="" disabled>Select size</option>
          <option value="XXS">XXS</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select>
      </div>
      
      <Button text="Aggiungi Prodotto" funct={(e) => handleSubmit(e)}/>
      <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />
      {showPopUp && <CheckPopUps />}
      {showFinalPopUp && <FinalPopUps />}

    </form>
  );
};

export default AddProductForm;
