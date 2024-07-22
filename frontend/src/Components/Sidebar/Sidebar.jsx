import {React, useState} from 'react';
import './Sidebar.css';
import FormProgetto from '../FormBacheca/FormProgetto';
import FormProposta from '../FormBacheca/FormProposta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isOpen, setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className={`sideMain ${isOpen ? 'openBar' : ''}`}>
      <div className={`menuButton ${isOpen ? 'openMenu' : ''}`} onClick={toggle}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",fontSize: "30px"}} />
      </div>
      <div className="sidebar">
          <FormProgetto />
          <div className="space"></div>
          <FormProposta />   
    </div>
    </div>
  );
}

export default Sidebar;
