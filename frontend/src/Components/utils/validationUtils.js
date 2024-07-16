/**
 * Verifica se una stringa è una email valida.
 * @param {string} email - L'email da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'Email non valida. ' };
    }
  };
  
  /**
   * Verifica se una password è valida (almeno 8 caratteri, include una lettera maiuscola, una minuscola e un numero).
   * @param {string} password - La password da validare.
   * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
   */
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordRegex.test(password)) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola e un numero.' };
    }
  };
  
  /**
 * Verifica se l'email e la password sono valide.
 * @param {string} email - L'email da validare.
 * @param {string} password - La password da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateCredentials = (email, password) => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
  
    if (emailValidation.isValid && passwordValidation.isValid) {
      return { isValid: true, message: '' };
    } else {
      let errorMessage = '';
      if (!emailValidation.isValid) {
        errorMessage += emailValidation.message + '\n';  
      }
      if (!passwordValidation.isValid) {
        errorMessage += passwordValidation.message;
      }
      return { isValid: false, message: errorMessage.trim() };
    }
  };


/**
 * Verifica se due password sono uguali.
 * @param {string} password1 - La prima password da confrontare.
 * @param {string} password2 - La seconda password da confrontare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validatePasswordsMatch = (password1, password2) => {
    if (password1 === password2) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'Le password non corrispondono.' };
    }
  };
  
/**
 * Verifica se un nome è un nome proprio valido.
 * @param {string} name - Il nome da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateProperName = (name) => {
    const nameRegex = /^[A-ZÀ-ÿ][a-zà-ÿ]*$/;  // Accetta nomi con lettere accentate e deve iniziare con una lettera maiuscola
    if (nameRegex.test(name)) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'Il nome deve iniziare con una lettera maiuscola e contenere solo lettere.' };
    }
  };


  /**
 * Verifica se una descrizione è valida.
 * @param {string} description - Il nome da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateDescription = (description) => {
  const nameRegex = /^[A-Z][a-zA-Z0-9\s]*$/;  // Solo lettere, numeri e spazi
  if (nameRegex.test(description)) {
    return { isValid: true, message: '' };
  } else {
    return { isValid: false, message: 'Il testo può contenere solo lettere, numeri e spazi e deve inizare con lettera maiuscola'};
  }
};

/**
 * Verifica se una data non è futura.
 * @param {string} date - La data da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateDateNotInFuture = (date) => {

    const inputDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Imposta le ore, minuti, secondi e millisecondi a 0 per confrontare solo la data
    
    if (inputDate <= today) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'La data deve essere nel formato YYYY-MM-DD e non può essere futura.' };
    }
  };

  /**
 * Verifica se due email sono uguali.
 * @param {string} email1 - La prima email da confrontare.
 * @param {string} email2 - La seconda email da confrontare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateEmailsMatch = (email1, email2) => {
    if (email1 === email2) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'Le email non corrispondono.' };
    }
  };
  
  

/**
 * Verifica tutti i dati per la registrazione dell'utente.
 * @param {string} firstName - Il nome dell'utente.
 * @param {string} lastName - Il cognome dell'utente.
 * @param {string} birthDate - La data di nascita dell'utente (YYYY-MM-DD).
 * @param {string} email - L'email dell'utente.
 * @param {string} password - La password dell'utente.
 * @param {string} confirmPassword - La conferma della password dell'utente.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateRegistration = (firstName, lastName, birthDate, email, confirmEmail, password, confirmPassword) => {
    const firstNameValidation = validateProperName(firstName);
    const lastNameValidation = validateProperName(lastName);
    const birthDateValidation = validateDateNotInFuture(birthDate);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordsMatch = validatePasswordsMatch(password, confirmPassword);
    const emailMatch = validateEmailsMatch(email, confirmEmail)
  
    let isValid = true;
    let errorMessage = '';
  
    if (!firstNameValidation.isValid) {
      isValid = false;
      errorMessage += firstNameValidation.message + '\n';
    }
    if (!lastNameValidation.isValid) {
      isValid = false;
      errorMessage += lastNameValidation.message + '\n';
    }
    if (!birthDateValidation.isValid) {
      isValid = false;
      errorMessage += birthDateValidation.message + '\n';
    }
    if (!emailValidation.isValid) {
      isValid = false;
      errorMessage += emailValidation.message + '\n';
    }
    if (!emailMatch.isValid) {
        isValid = false;
        errorMessage += emailValidation.message + '\n';
    }
    if (!passwordValidation.isValid) {
      isValid = false;
      errorMessage += passwordValidation.message + '\n';
    }
    if (!passwordsMatch.isValid) {
      isValid = false;
      errorMessage += passwordsMatch.message;
    }
  
    return { isValid, message: errorMessage };
  };
  
  /**
 * Verifica i dati del modulo di aggiunta del prodotto.
 * @param {string} name - Il nome del prodotto.
 * @param {string} description - La descrizione del prodotto.
 * @param {string} size - La taglia del prodotto.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateAddProductForm = (name, description) => {
  const nameValidation = validateProperName(name);
  const descriptionValidation = validateDescription(description)

  let isValid = true;
  let errorMessage = '';

  if (!nameValidation.isValid) {
    isValid = false;
    errorMessage += nameValidation.message + '\n';
  }
  if (!descriptionValidation.isValid) {
    isValid = false;
    errorMessage += descriptionValidation.message + '\n';
  }

  return { isValid, message: errorMessage };
};
