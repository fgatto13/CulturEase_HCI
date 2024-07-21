import React from 'react';
import './Sidebar.css';
import FormProgetto from '../FormBacheca/FormProgetto';
import FormProposta from '../FormBacheca/FormProposta';


function Sidebar() {
  return (
      <div className="sidebar">
          <FormProgetto />
          <div className="space"></div>
          <FormProposta />   
    </div>
  );
}

export default Sidebar;
