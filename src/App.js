import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    const input = e.target.value;

    if (input === 'AC') {
      setValue('');
    } else if (input === 'DC') {
      setValue(value.slice(0, -1));
    } else if (input === '=') {
      try {
        setValue(eval(value));
      } catch {
        setValue('Error');
      }
    } else {
      setValue(value + input);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="Calculator">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="display">
              <input type="text" placeholder="Enter your value" value={value} readOnly />
            </div>
            <div>
              <button type="button" value="AC" onClick={handleClick}>AC</button>
              <button type="button" value="DC" onClick={handleClick}>DC</button>
              <button type="button" value="." onClick={handleClick}>.</button>
              <button type="button" value="/" onClick={handleClick}>/</button>
            </div>
            <div>
              <button type="button" value="9" onClick={handleClick}>9</button>
              <button type="button" value="8" onClick={handleClick}>8</button>
              <button type="button" value="7" onClick={handleClick}>7</button>
              <button type="button" value="*" onClick={handleClick}>*</button>
            </div>
            <div>
              <button type="button" value="6" onClick={handleClick}>6</button>
              <button type="button" value="5" onClick={handleClick}>5</button>
              <button type="button" value="4" onClick={handleClick}>4</button>
              <button type="button" value="+" onClick={handleClick}>+</button>
            </div>
            <div>
              <button type="button" value="3" onClick={handleClick}>3</button>
              <button type="button" value="2" onClick={handleClick}>2</button>
              <button type="button" value="1" onClick={handleClick}>1</button>
              <button type="button" value="-" onClick={handleClick}>-</button>
            </div>
            <div>
              <button type="button" value="00" onClick={handleClick}>00</button>
              <button type="button" value="0" onClick={handleClick}>0</button>
              <button type="button" value="=" className="equal" onClick={handleClick}>=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
