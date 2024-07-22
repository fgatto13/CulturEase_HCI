import {React, useState} from 'react';
import './Sidebar.css';
import FormProgetto from '../FormBacheca/FormProgetto';
import FormProposta from '../FormBacheca/FormProposta';


function Sidebar() {
  const [isOpen, setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className={`menuButton ${isOpen ? 'openButton' : ''}`} onClick={toggle}></div>
      <div className={`sidebar ${isOpen ? 'openBar' : ''}`}>
          <FormProgetto />
          <div className="space"></div>
          <FormProposta />   
    </div>
    </>
  );
}

export default Sidebar;
