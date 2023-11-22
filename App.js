import React, {  useState } from 'react';
import './index.css';
import SearchWord from './SearcedWord.js';
import AddWord from './Input.js';


export default function MyApp(){
    const[words, setWord]= useState([]);

    const handleAddInput = (input) => {
        setWord([...words, input]);
    }
   
    return (
        <div>
            <h1>My dictionary!</h1>
            <hr />
            <p>Save your words in dictionary!</p>
            <AddWord handelInput={handleAddInput}/>
            <SearchWord words={words}/>
            <h3>Words from Dictionar:</h3>
            <ul>
                {words.map((word) => (
                <li key={word}>{word}</li>
          ))}
        </ul>
           
        </div>
    );
}