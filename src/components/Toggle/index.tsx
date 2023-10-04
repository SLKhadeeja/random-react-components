import React, { useState } from 'react';
import './style.css'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
  };

  return (
    <div>
      <h1>Toggle</h1>
      <div className='toggle-container'>
        <div onClick={handleToggle} className={`slider ${isChecked || 'isChecked'}`} />
      </div>
    </div>
  )
}

export default Toggle;