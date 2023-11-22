import React from 'react';
import './App.css';
import {useState} from 'react';


function SearchWord({words}) {
    const [input, setInput] = useState('');
    const [rezult, setRezult] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }; 

    
      
    const handleClick = (e) => {
        e.preventDefault();
        const itmList = words.filter(word => word === input);
        setRezult([...rezult, itmList]);        
        setInput('');
    };
    
  
    return (
      <div>
        <form onSubmit={handleClick}>
        <input 
            type="text"
            className="input"         
            onChange={handleChange}
            value={input}
            placeholder="Type here.."
        />
        <button >Check</button>
        <h2>Here are your words: {rezult}</h2>
         
        </form>
      </div>
    );
  }
  
  export default SearchWord;