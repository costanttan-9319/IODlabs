import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('add');
  const [result, setResult] = useState('');

  const handleCalculation = (e) => {
    e.preventDefault();
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setResult('Invalid Input');
      return;
    }

    let res;
    switch (operator) {
      case 'add': res = val1 + val2; break;
      case 'subtract': res = val1 - val2; break;
      case 'multiply': res = val1 * val2; break;
      case 'divide': res = val2 !== 0 ? val1 / val2 : 'Cannot divide by zero'; break;
      default: res = '';
    }
    setResult(res);
  };

  return (
    <div className="calc-card">
      <form onSubmit={handleCalculation}>
        <div className="calc-group">
          <label>First Number</label>
          <input 
            type="number" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            placeholder="0"
          />
        </div>

        <div className="calc-group">
          <label>Operation</label>
          <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication (×)</option>
            <option value="divide">Division (÷)</option>
          </select>
        </div>

        <div className="calc-group">
          <label>Second Number</label>
          <input 
            type="number" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            placeholder="0"
          />
        </div>

        <button type="submit" className="calc-btn">Calculate</button>
      </form>

      {result !== '' && (
        <div className="calc-result">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}