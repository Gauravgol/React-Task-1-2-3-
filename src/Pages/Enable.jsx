import React, { useState } from 'react';

export default function Enable() {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleEnableDisable = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div>
      <button onClick={toggleEnableDisable}>
        {isEnabled ? 'Disable' : 'Enable'}
      </button>
      <p>
        The button is {isEnabled ? 'enabled' : 'disabled'}.
      </p>
    </div>
  );
}