import React, { createContext, useState } from 'react';

export const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showFinalPopUp, setShowFinalPopUp] = useState(false);
  const [message, setMessage] = useState('Hello, this is a pop-up message!');
  const [showGreenContent, setshowGreenContent] = useState(true);

  const handleOpenPopUp = (newMessage) => {
    setMessage(newMessage);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleOpenFinalPopUp = (newMessage, green) => {
    setMessage(newMessage);
    (green)? setshowGreenContent(true) : setshowGreenContent(false);
    setShowPopUp(false);
    setShowFinalPopUp(true);
  };

  const handleCloseFinalPopUp = () => {
    setShowFinalPopUp(false);
  };

  return (
    <PopUpContext.Provider value={{ 
      showPopUp, 
      showFinalPopUp, 
      showGreenContent,
      message, 
      handleOpenPopUp, 
      handleClosePopUp, 
      handleOpenFinalPopUp, 
      handleCloseFinalPopUp 
    }}>
      {children}
    </PopUpContext.Provider>
  );
};
