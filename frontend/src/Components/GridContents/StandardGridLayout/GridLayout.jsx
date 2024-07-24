import React, { useState, useEffect } from "react";
import './GridLayout.css';
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";

const GridLayout = ({ elements, ItemComponent }) => {

  const elementsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [currentElements, setCurrentElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState(elements);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
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
    if (!title || typeof title !== 'string') {
        setFilteredElements(elements);
        setPage(0);
        return;
    }

    const filtered = elements.filter(element => {
        return element.title && typeof element.title === 'string' &&
               element.title.toLowerCase().includes(title.toLowerCase());
    });

    setFilteredElements(filtered);
    setPage(0);
};


  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleCloseProductDetails = () => {
    setSelectedElement(null);
  };

  return (
    <div className="Layout">
      <SearchBar onSearch={handleSearch} />

      <div className="gridContainer">
        {currentElements.map((element, index) => (
          <div
            key={startIndex + index}
            className="elementBox"
            onClick={() => handleElementClick(element)}
          >
            <img src={element.image} alt={element.title} className="element-image" />
          </div>
        ))}
      </div>

      <Pagination
        handlePage={handlePage}
        numberOfCards={numberOfElements}
        elementsPerPage={elementsPerPage}
        currentPage={page}
      />

      {selectedElement && (
        <ItemComponent element={selectedElement} itemType={1} buttonDisplay={true} onClose={handleCloseProductDetails} />
      )}
    </div>
  );
};

export default GridLayout;
