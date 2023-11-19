import React from 'react';
import './App.css';
import {useState} from 'react';


function AddWord() {
    const [input, setInput] = useState('');
    let wordList =[];
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      if (input) {
        wordList.push(input);
        setInput('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={handleChange}
          value={input}
          placeholder="Type your words..."
        />
        <button onClick={handleClick}>Add Word</button>
        <ul>
          {wordList.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AddWord;