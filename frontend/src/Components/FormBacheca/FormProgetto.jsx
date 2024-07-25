import React, { useContext, useState } from 'react';
import '../../Pages/Bacheca/Bacheca.css';
import { validateNameAndDescription } from '../utils/validationUtils';
import { PopUpContext } from '../../context/PopUpContext';
import { ErrorMessage } from '../UserPopups';

function FormProgetto() {
  const { handleOpenPopUp } = useContext(PopUpContext);
  const [nome, setNome] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [error, setError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleSubmit = () => {
    const { isValid: isValid, message: message } = validateNameAndDescription(nome, descrizione);

    if (isValid) {
      handleOpenPopUp('Confermi di voler proporre il progetto?');
      setNome('');
      setDescrizione('');
      setError('');
      setIsErrorVisible(false); 
    } else {
      setError(message);
      setIsErrorVisible(true); 
    }
  };

  const closeErrorMessage = () => {
    setIsErrorVisible(false);
  };

  return (
    <div className="Form">
      <h4>Proposta di progetto</h4>
      <hr />
      <p className="sottotitoloForm">Proponi un progetto che pensi possa essere<br />interessante per la community</p>
      <span htmlFor="formGroupExampleInput" className="form-label">Nome</span>
      <input 
        type="text" 
        placeholder="Inserire nome progetto..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <div className="space"></div>
      <span htmlFor="formGroupExampleInput" className="form-label">Descrizione</span>
      <textarea 
        placeholder="Inserire descrizione progetto..."
        value={descrizione}
        onChange={(e) => setDescrizione(e.target.value)}>
      </textarea>
      <div className="space">
           <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />
      </div>
      <div className="button"> 
        <button className="inviomodulo" onClick={handleSubmit}>Proponi progetto</button> 
      </div>
    </div>
  );
}

export default FormProgetto;
