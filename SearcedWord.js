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
    const itmList = words.filter((word) => word === input);
    if(itmList.length === 0){
      setRezult(["Sorry, we do not have this word!"])
    } else {
      setRezult(itmList);
    }        
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
          placeholder="Search here.."
        />
        <button>Check</button>
        <h2>Here are your words:</h2>
        {rezult.map ((word,index) => (
        <li key={index}>{word} </li>
        ))}
      </form>
    </div>
  );
}
  
export default SearchWord;