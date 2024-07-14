import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "../../InteractiveComponents";
import './GridLayout.css';
import CheckPopUps from "../../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../../UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../../UserPopups/PopUpContext";

const GridLayout = ({ elements }) => {
  const [startIndex, setStartIndex] = useState(0);

  //test pop-up
  const { showPopUp, showFinalPopUp, handleOpenPopUp} = useContext(PopUpContext);

  const elementsPerPage = 6;

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + elementsPerPage, elements.length));
  };

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - elementsPerPage, 0));
  };

  const currentElements = elements.slice(startIndex, startIndex + elementsPerPage);

  return (
    <div className="Layout">
      <div className="gridContainer">
        {currentElements.map((element, index) => (
          <div key={startIndex + index} className="elementBox">
            <img src={element.image} alt={element.title} className="element-image" />
            <h1 className="element-title">{element.title}</h1>
            <p className="element-description">{element.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
      {/*  <Button text="Previous" funct={handlePrevious} dis={startIndex === 0} />
        <Button text="Next" funct={handleNext} dis={startIndex + elementsPerPage >= elements.length} />  */}

      {/* test pop-up */}
      <button onClick={() => handleOpenPopUp('This is a new pop-up message!')}>Show PopUp</button>
      {showPopUp && <CheckPopUps />}
      {showFinalPopUp && <FinalPopUps />}

      </div>
    </div>
  );
};

export default GridLayout;
