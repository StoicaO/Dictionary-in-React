import React from 'react';
import './App.css';
import {useState} from 'react';


function AddWord({handelInput}) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };    
      
    const handleClick = (e) => {
      e.preventDefault();
      if (input) {
        handelInput(input); 
        setInput('');
      }
    };
  
    return (
      <div>
        <form onSubmit={handleClick}>
        <input 
             style={{
              top: '200px',
              color: 'pink'}}
            type="text"
            className="input"         
            onChange={handleChange}
            value={input}
            placeholder="Type here.."
        />
        <button>Add Word</button>
        </form>
      </div>
    );
  }
  
  export default AddWord;