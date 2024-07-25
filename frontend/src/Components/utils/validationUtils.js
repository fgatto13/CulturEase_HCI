/**
 * Verifica se una stringa è una email valida.
 * @param {string} email - L'email da validare.
 * @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
 */
export const validateEmail = (email) => {
  if (!email) {
      return { isValid: false, message: 'L\'email non può essere vuota.' };
  }
  if (!email.includes('@')) {
      return { isValid: false, message: 'L\'email deve contenere il carattere @.' };
  }
  const emailParts = email.split('@');
  if (emailParts.length !== 2) {
      return { isValid: false, message: 'L\'email deve contenere una sola @.' };
  }
  if (!emailParts[1].includes('.')) {
      return { isValid: false, message: 'Il dominio dell\'email deve contenere un punto.' };
  }
  return { isValid: true, message: '' };
};

/**
* Verifica se una password è valida (almeno 8 caratteri, include una lettera maiuscola, una minuscola e un numero).
* @param {string} password - La password da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validatePassword = (password) => {
  if (!password) {
      return { isValid: false, message: 'La password non può essere vuota.' };
  }
  if (password.length < 8) {
      return { isValid: false, message: 'La password deve contenere almeno 8 caratteri.' };
  }
  if (!/[A-Z]/.test(password)) {
      return { isValid: false, message: 'La password deve contenere almeno una lettera maiuscola.' };
  }
  if (!/[a-z]/.test(password)) {
      return { isValid: false, message: 'La password deve contenere almeno una lettera minuscola.' };
  }
  if (!/\d/.test(password)) {
      return { isValid: false, message: 'La password deve contenere almeno un numero.' };
  }
  return { isValid: true, message: '' };
};

/**
* Verifica se un nome è un nome proprio valido.
* @param {string} name - Il nome da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateProperName = (name) => {
  if (!name) {
      return { isValid: false, message: 'Il nome non può essere vuoto.' };
  }
  if (!/^[A-ZÀ-ÿ]/.test(name)) {
      return { isValid: false, message: 'Il nome deve iniziare con una lettera maiuscola.' };
  }
  if (!/^[A-Za-zÀ-ÿ]+$/.test(name)) {
      return { isValid: false, message: 'Il nome deve contenere solo lettere.' };
  }
  return { isValid: true, message: '' };
};

/**
* Verifica se una descrizione è valida.
* @param {string} description - La descrizione da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateDescription = (description) => {
  if (!description) {
      return { isValid: false, message: 'La descrizione non può essere vuota.' };
  }
  if (!/^[A-Z]/.test(description)) {
      return { isValid: false, message: 'La descrizione deve iniziare con una lettera maiuscola.' };
  }
  if (!/^[A-Za-z0-9\s]*$/.test(description)) {
      return { isValid: false, message: 'La descrizione può contenere solo lettere, numeri e spazi.' };
  }
  return { isValid: true, message: '' };
};

/**
* Verifica se una data non è futura.
* @param {string} date - La data da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateDateNotInFuture = (date) => {
  if (!date) {
      return { isValid: false, message: 'La data non può essere vuota.' };
  }
  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Imposta le ore, minuti, secondi e millisecondi a 0 per confrontare solo la data

  if (isNaN(inputDate)) {
      return { isValid: false, message: 'La data non è valida.' };
  }
  if (inputDate > today) {
      return { isValid: false, message: 'La data non può essere futura.' };
  }
  return { isValid: true, message: '' };
};

/**
* Verifica se due password sono uguali.
* @param {string} password1 - La prima password da confrontare.
* @param {string} password2 - La seconda password da confrontare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validatePasswordsMatch = (password1, password2) => {
  if (!password1 || !password2) {
      return { isValid: false, message: 'Le password non possono essere vuote.' };
  }
  if (password1 === password2) {
      return { isValid: true, message: '' };
  } else {
      return { isValid: false, message: 'Le password non corrispondono.' };
  }
};

/**
* Verifica se due email sono uguali.
* @param {string} email1 - La prima email da confrontare.
* @param {string} email2 - La seconda email da confrontare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateEmailsMatch = (email1, email2) => {
  if (!email1 || !email2) {
      return { isValid: false, message: 'Le email non possono essere vuote.' };
  }
  if (email1 === email2) {
      return { isValid: true, message: '' };
  } else {
      return { isValid: false, message: 'Le email non corrispondono.' };
  }
};

/**
* Verifica se l'email e la password sono valide.
* @param {string} email - L'email da validare.
* @param {string} password - La password da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateCredentials = (email, password) => {
  if (!email) {
      return { isValid: false, message: 'L\'email non può essere vuota.' };
  }
  if (!password) {
      return { isValid: false, message: 'La password non può essere vuota.' };
  }
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  if (!emailValidation.isValid) {
      return { isValid: false, message: emailValidation.message };
  }
  if (!passwordValidation.isValid) {
      return { isValid: false, message: passwordValidation.message };
  }

  return { isValid: true, message: '' };
};

/**
* Verifica tutti i dati per la registrazione dell'utente.
* @param {string} firstName - Il nome dell'utente.
* @param {string} lastName - Il cognome dell'utente.
* @param {string} birthDate - La data di nascita dell'utente (YYYY-MM-DD).
* @param {string} email - L'email dell'utente.
* @param {string} confirmEmail - La conferma dell'email dell'utente.
* @param {string} password - La password dell'utente.
* @param {string} confirmPassword - La conferma della password dell'utente.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateRegistration = (firstName, lastName, birthDate, email, confirmEmail, password, confirmPassword) => {
  if (!firstName) {
      return { isValid: false, message: 'Il nome non può essere vuoto.' };
  }
  if (!lastName) {
      return { isValid: false, message: 'Il cognome non può essere vuoto.' };
  }
  if (!birthDate) {
      return { isValid: false, message: 'La data di nascita non può essere vuota.' };
  }
  if (!email) {
      return { isValid: false, message: 'L\'email non può essere vuota.' };
  }
  if (!confirmEmail) {
      return { isValid: false, message: 'La conferma dell\'email non può essere vuota.' };
  }
  if (!password) {
      return { isValid: false, message: 'La password non può essere vuota.' };
  }
  if (!confirmPassword) {
      return { isValid: false, message: 'La conferma della password non può essere vuota.' };
  }

  const firstNameValidation = validateProperName(firstName);
  const lastNameValidation = validateProperName(lastName);
  const birthDateValidation = validateDateNotInFuture(birthDate);
  const emailValidation = validateEmail(email);
  const emailMatch = validateEmailsMatch(email, confirmEmail);
  const passwordValidation = validatePassword(password);
  const passwordsMatch = validatePasswordsMatch(password, confirmPassword);

  if (!firstNameValidation.isValid) {
      return { isValid: false, message: firstNameValidation.message };
  }
  if (!lastNameValidation.isValid) {
      return { isValid: false, message: lastNameValidation.message };
  }
  if (!birthDateValidation.isValid) {
      return { isValid: false, message: birthDateValidation.message };
  }
  if (!emailValidation.isValid) {
      return { isValid: false, message: emailValidation.message };
  }
  if (!emailMatch.isValid) {
      return { isValid: false, message: emailMatch.message };
  }
  if (!passwordValidation.isValid) {
      return { isValid: false, message: passwordValidation.message };
  }
  if (!passwordsMatch.isValid) {
      return { isValid: false, message: passwordsMatch.message };
  }

  return { isValid: true, message: '' };
};

/**
* Verifica i dati del modulo di aggiunta del prodotto.
* @param {string} name - Il nome del prodotto.
* @param {string} description - La descrizione del prodotto.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateAddProductForm = (name, description, image, size) => {
  if (!name) {
      return { isValid: false, message: 'Il nome del prodotto non può essere vuoto.' };
  }
  if (!description) {
      return { isValid: false, message: 'La nota del prodotto non può essere vuota.' };
  }

  const nameValidation = validateProperName(name);
  const descriptionValidation = validateDescription(description);

  if (!nameValidation.isValid) {
      return { isValid: false, message: nameValidation.message };
  }
  if (!descriptionValidation.isValid) {
      return { isValid: false, message: descriptionValidation.message };
  }
  if(!image){
      return { isValid: false, message: 'inserire un\'immagine.' };
  }
  if(!size || size === "Select size"){
    return { isValid: false, message: 'seleziona una taglia.' };
  }

  return { isValid: true, message: '' };
};

/**
* Verifica se un modulo con nome e descrizione è valido.
* @param {string} name - Il nome da validare.
* @param {string} description - La descrizione da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateNameAndDescription = (name, description) => {
    // Validazione del nome
    if (!name) {
        return { isValid: false, message: 'Il nome non può essere vuoto.' };
    }
    if (!/^[A-ZÀ-ÿ]/.test(name)) {
        return { isValid: false, message: 'Il nome deve iniziare con una lettera maiuscola.' };
    }
    if (!/^[A-Za-zÀ-ÿ]+$/.test(name)) {
        return { isValid: false, message: 'Il nome deve contenere solo lettere.' };
    }
  
    // Validazione della descrizione
    if (!description) {
        return { isValid: false, message: 'La descrizione non può essere vuota.' };
    }
    if (!/^[A-Z]/.test(description)) {
        return { isValid: false, message: 'La descrizione deve iniziare con una lettera maiuscola.' };
    }
    if (!/^[A-Za-z0-9\s]*$/.test(description)) {
        return { isValid: false, message: 'La descrizione può contenere solo lettere, numeri e spazi.' };
    }
  
    // Se tutte le validazioni passano
    return { isValid: true, message: '' };
  };

/**
* Verifica se tre nomi sono validi.
* @param {string} name1 - Il primo nome da validare.
* @param {string} option1 - La prima opzione da validare.
* @param {string} option2 - La seconda opzione da validare.
* @returns {Object} - Restituisce un oggetto con un booleano `isValid` e un messaggio di errore, se presente.
*/
export const validateThreeNames = (name1, option1, option2) => {
    // Funzione di validazione per un singolo nome
    const validateName = (name) => {
      if (!name) {
        return { isValid: false, message: 'Il nome non può essere vuoto.' };
      }
      if (!/^[A-ZÀ-ÿ]/.test(name)) {
        return { isValid: false, message: 'Il nome deve iniziare con una lettera maiuscola.' };
      }
      if (!/^[A-Za-zÀ-ÿ]+$/.test(name)) {
        return { isValid: false, message: 'Il nome deve contenere solo lettere.' };
      }
      return { isValid: true, message: '' };
    };
  
    // Validazione di ciascun nome
    const name1Validation = validateName(name1);
    const option1Validation = validateName(option1);
    const option2Validation = validateName(option2);
  
    // Se almeno uno dei nomi non è valido, restituisce un errore
    if (!name1Validation.isValid) {
      return { isValid: false, message: `Il primo nome non è valido: ${name1Validation.message}` };
    }
    if (!option1Validation.isValid) {
      return { isValid: false, message: `La prima opzione non è valida: ${option1Validation.message}` };
    }
    if (!option2Validation.isValid) {
      return { isValid: false, message: `La seconda opzione non è valida: ${option2Validation.message}` };
    }
  
    // Se tutti i nomi sono validi
    return { isValid: true, message: '' };
  };
  
  