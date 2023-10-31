import React, { useState } from 'react';

export default function Sum() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Sum: ${sum}`);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleNum2Change}
      />
      <button onClick={calculateSum}>Add Numbers</button>
      <p>{result}</p>
    </div>
  );
}

 
