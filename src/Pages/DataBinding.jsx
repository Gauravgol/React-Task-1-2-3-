import React, { useState } from 'react';

export default function DataBinding() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
  <div>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      style={{ marginBottom: '10px' }}  
    />
    <p>Input Value: {inputValue}</p>
  </div>
</div>
 
  );
}

 
