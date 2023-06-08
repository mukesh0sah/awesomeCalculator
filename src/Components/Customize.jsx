import React, { useState } from 'react';
import { FiSettings } from "react-icons/fi";


function Custom() {
  const [showDescription, setShowDescription] = useState(false);
  const [color, setColor] = useState('')

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  



  return (
    <div className='custom'>
      <button onClick={toggleDescription}  className="customIcon-button">
        <FiSettings className="customIcon" /> 
      </button>
      {showDescription && (
        <p>
            <h1>hello sir ji</h1>
        </p>
      )}
    </div>
  );
}

export default Custom;