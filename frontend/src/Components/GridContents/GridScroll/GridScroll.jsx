import React, { useState } from "react";
import './GridScroll.css';

const GridScroll = ({ elements, ItemComponent }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  if (!Array.isArray(elements)) {
    console.error("elements should be an array");
    return null;
  }
  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleCloseProductDetails = () => {
    setSelectedElement(null);
  };

  return (
    <>
      <div className="ScrollgridContainer">
        {elements.map((element, index) => (
          <div
            key={index}
            className="elementBox"
            onClick={() => handleElementClick(element)}
          >
            <img src={element.image} alt={element.title} className="element-image" />
            <h1 className="element-title">{element.title}</h1>
            <p className="element-description">{element.descrizione}</p>
          </div>
        ))}
      </div>
      {selectedElement && (
        <ItemComponent element={selectedElement} onClose={handleCloseProductDetails} />
      )}
    </>
  );
};

export default GridScroll;
