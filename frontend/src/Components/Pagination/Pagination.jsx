import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
import Button from '../InteractiveComponents';

const Pagination = ({ handlePage, numberOfCards, elementsPerPage, currentPage }) => {
  const totalPages = Math.ceil(numberOfCards / elementsPerPage);

  const handleClick = (page) => {
      handlePage(page - currentPage);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          text={index + 1}
          funct={() => handleClick(index)}
          className={`pagination-button ${index === currentPage ? 'selected-button' : ''}`}
        />
      ))}
    </div>
  );
};

Pagination.propTypes = {
  handlePage: PropTypes.func.isRequired,
  numberOfCards: PropTypes.number.isRequired,
  elementsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
