import React, { useContext, useState } from 'react';
import '../../Pages/Bacheca/Bacheca.css';
import { validateThreeNames } from '../utils/validationUtils';
import { PopUpContext } from '../../context/PopUpContext';
import { ErrorMessage } from '../UserPopups';

function FormProposta() {
  const { handleOpenPopUp } = useContext(PopUpContext);
  const [domanda, setDomanda] = useState('');
  const [opzione1, setOpzione1] = useState('');
  const [opzione2, setOpzione2] = useState('');
  const [error, setError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleSubmit = () => {
    const { isValid: isValid, message: message } = validateThreeNames(domanda, opzione1, opzione2);

    if (isValid){
      handleOpenPopUp('Confermi di voler proporre il sondaggio?');
      setDomanda('');
      setOpzione1('');
      setOpzione2('');
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
      <h4>Proposta di sondaggio</h4>
      <hr />
      <p className="sottotitoloForm">Proponi un sondaggio che pensi possa essere<br />interessante per la community</p>
      <span htmlFor="formGroupExampleInput" className="form-label">Domanda</span>
      <input 
        type="text" 
        placeholder="Inserire domanda sondaggio..."
        value={domanda}
        onChange={(e) => setDomanda(e.target.value)}
      />
      <span htmlFor="formGroupExampleInput" className="form-label">Opzioni</span>
      <ul>
        <li><input 
          className="opzioni" 
          type="text" 
          placeholder="Inserire opzione..."
          value={opzione1}
          onChange={(e) => setOpzione1(e.target.value)}
        /></li>
        <li><input 
          className="opzioni" 
          type="text" 
          placeholder="Inserire opzione..."
          value={opzione2}
          onChange={(e) => setOpzione2(e.target.value)}
        /></li>
      </ul>
        <ErrorMessage error={isErrorVisible ? error : ''} closeError={closeErrorMessage} />
      <div className="button">
        <button className="inviomodulo" onClick={handleSubmit}>Proponi sondaggio</button>
      </div>
    </div>
  );
}

export default FormProposta;
