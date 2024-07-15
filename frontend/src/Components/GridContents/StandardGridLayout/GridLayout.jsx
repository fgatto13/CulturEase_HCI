import React, { useState, useEffect, useContext } from "react";
import Button from "../../InteractiveComponents";
import './GridLayout.css';

import CheckPopUps from "../../UserPopups/CheckPopUps/CheckPopUps";
import FinalPopUps from "../../UserPopups/FinalPopUps/FinalPopUps";
import { PopUpContext } from "../../UserPopups/PopUpContext";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";

const GridLayout = ({ elements }) => {
  //test pop-up
  const { showPopUp, showFinalPopUp, handleOpenPopUp } = useContext(PopUpContext);

  const elementsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [currentElements, setCurrentElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState(elements);

  useEffect(() => {
    // Quando cambia la pagina o gli elementi filtrati, aggiorna currentElements
    const newStartIndex = page * elementsPerPage;
    setStartIndex(newStartIndex);
    setCurrentElements(filteredElements.slice(newStartIndex, newStartIndex + elementsPerPage));
  }, [page, filteredElements]);

  if (!Array.isArray(elements)) {
    console.error("elements should be an array");
    return null;
  }

  const numberOfElements = filteredElements.length;

  const handlePage = (shift) => {
    setPage((prevPage) => {
      const newPage = prevPage + shift;
     
      if (newPage < 0 || newPage >= Math.ceil(numberOfElements / elementsPerPage)) {
        return prevPage;
      }
      return newPage;
    });
  };

  const handleSearch = (title) => {
    // Filtra gli elementi in base al titolo della ricerca
    const filtered = elements.filter(element =>
      element.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredElements(filtered);
    setPage(0); // Resetta alla prima pagina
  };

  return (
    <div className="Layout">
      <SearchBar onSearch={handleSearch} />

      <div className="gridContainer">
        {currentElements.map((element, index) => (
          <div key={startIndex + index} className="elementBox">
            <img src={element.image} alt={element.title} className="element-image" />
            <h1 className="element-title">{element.title}</h1>
            <p className="element-description">{element.description}</p>
          </div>
        ))}
      </div>

      <Pagination
        handlePage={handlePage}
        numberOfCards={numberOfElements}
        elementsPerPage={elementsPerPage}
        currentPage={page}
      />

      {/* test pop-up */}
      <Button text="Show Pop-up" funct={() => handleOpenPopUp('This is a new pop-up message!')} />
      {showPopUp && <CheckPopUps />}
      {showFinalPopUp && <FinalPopUps />}
    </div>
  );
};

export default GridLayout;
