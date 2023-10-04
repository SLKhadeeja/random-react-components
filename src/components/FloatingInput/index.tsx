// FloatingInput.js

import React, { ReactNode, useState } from 'react';
import './style.css';

type Props = {
  label: string;
  id: string;
};

const FloatingInput = ({ label, id }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`floating-input-container ${isFocused ? 'focused' : ''}`}>
      <label htmlFor={id} className="floating-input-label">
        {label}
      </label>
      <input
        id={id}
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default FloatingInput;
