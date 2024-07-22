import React, { useState, useContext } from 'react';
import './BoxRichieste.css';
import Button from '../InteractiveComponents';
import { validateProperName, validateDescription } from '../utils/validationUtils';
import { PopUpContext } from '../UserPopups/PopUpContext';
import CheckPopUps from "../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../UserPopups/FinalPopUps/FinalPopUps";
import { ErrorMessage } from '../UserPopups';
import closeIcon from './close-circle.png';
import { Link } from 'react-router-dom';

const BoxRichieste = ({ isVisible, onClose }) => {
    const { showPopUp, showFinalPopUp, handleOpenPopUp } = useContext(PopUpContext);

    const [selectedOption, setSelectedOption] = useState('');
    const [formValues, setFormValues] = useState({
        productName: '',
        description: '',
        image: null
    });
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setFormValues({
            productName: '',
            description: '',
            image: null
        });
    };

    const closeErrorMessage = () => {
        setIsErrorVisible(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleImageChange = (event) => {
        setFormValues({ ...formValues, image: event.target.files[0] });
    };

    const handleSubmit = () => {

        const { isValid: isValidName, message: messageName } = validateProperName(formValues.productName);
        const { isValid: isValidDescription, message: messageDescription } = validateDescription(formValues.description);
    
        let errorMessages = [];
    
        if (!isValidName) {
            errorMessages.push(messageName);
        }
    
        if (!isValidDescription) {
            errorMessages.push(messageDescription);
        }
    
        if (formValues.image === null) {
            errorMessages.push('Inserire un\'immagine');
        }
    
        if (errorMessages.length === 0) {
            handleOpenPopUp('Confermi di voler proseguire con la richiesta?');
            setFormValues({ productName: '', description: '', image: null });
            setError('');
            setIsErrorVisible(false);
        } else {
            const errorMessage = errorMessages.join('\n');
            setError(errorMessage);
            setIsErrorVisible(true);
        }
    };
    

    const getLabels = () => {
        switch (selectedOption) {
            case 'donazioni':
                return {
                    nameLabel: 'Nome prodotto',
                    namePlaceholder: 'Inserire nome prodotto',
                    descriptionPlaceholder: 'Inserire descrizione del prodotto'
                };
            case 'argomenti':
                return {
                    nameLabel: 'Nome argomento',
                    namePlaceholder: 'Inserire nome argomento',
                    descriptionPlaceholder: 'Inserire descrizione argomento'
                };
            case 'piatti':
                return {
                    nameLabel: 'Nome piatto',
                    namePlaceholder: 'Inserire nome piatto',
                    descriptionPlaceholder: 'Inserire descrizione piatto'
                };
            default:
                return {
                    nameLabel: 'Nome',
                    namePlaceholder: 'Inserire nome',
                    descriptionPlaceholder: 'Inserire descrizione'
                };
        }
    };

    const labels = getLabels();

    return (
        isVisible && (
            <div className="box-richieste-overlay">
                <div className="box-richieste">
                    <div className="box-richieste-header">
                        <h3>Richieste</h3>
                        <img src={closeIcon} alt="" className={"close-button"} onClick={onClose}/>
                    </div>
                    <div className="box-richieste-content">
                            <div className="form-group">
                                <label htmlFor="category">Tipologia richiesta</label>
                                <select id="category" value={selectedOption} onChange={handleOptionChange}>
                                    <option value="">--Seleziona--</option>
                                    <option value="donazioni">Donazioni</option>
                                    <option value="argomenti">Argomenti di studio</option>
                                    <option value="piatti">Piatti da cucinare</option>
                                </select>
                            </div>
                            {selectedOption === 'donazioni' && (
                                <>
                                    <Link to={'/catalogo'} className='link'>Visita catalogo</Link>
                                    <p>Oppure richiedi nuovi doni</p>
                                    <div className="arrow-down">↓</div>
                                </>
                            )}
                            {(selectedOption === 'donazioni' || selectedOption === 'argomenti' || selectedOption === 'piatti') && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="productName">{labels.nameLabel}</label>
                                        <input
                                            type="text"
                                            id="productName"
                                            name="productName"
                                            placeholder={labels.namePlaceholder}
                                            value={formValues.productName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Descrizione</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            placeholder={labels.descriptionPlaceholder}
                                            value={formValues.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Immagine</label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="btnContainer">
                                <Button text="Invia Richiesta" funct={() => handleSubmit()}/>
                            </div>
                            {showPopUp && <CheckPopUps />}
                            {showFinalPopUp && <FinalPopUps />}
                            <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />
                    </div>
                </div>
            </div>
        )
    );
};

export default BoxRichieste;
