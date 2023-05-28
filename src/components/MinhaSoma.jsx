import { useState } from "react";

export default function SumComponent  ()  {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    
    const handleNumber1Change = (event) => {
      setNumber1(Number(event.event.value));
    };
    
    const handleNumber2Change = (event) => {
      setNumber2(Number(event.target.value));
    };
    
    const handleSum = () => {
      setResult(number1 + number2);
    };
  
    return (
      <div>
        <input type="number" value={number1} onChange={handleNumber1Change} />
        <input type="number" value={number2} onChange={handleNumber2Change} />
        <button onClick={handleSum}>Somar</button>
        <p>O resultado da soma é: {result}</p>
      </div>
    );
  }
  