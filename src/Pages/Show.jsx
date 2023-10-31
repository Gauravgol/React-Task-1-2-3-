import React, { useState } from 'react';

function Show() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText); // Toggle the value of showText
  };

  return (
    <div>
      <button onClick={toggleText}>Show/Hide</button>
      {showText && <p>Hello!!</p>}
    </div>
  );
}

export default Show;
