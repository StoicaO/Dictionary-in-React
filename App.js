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
            <p className="ex1">Save your words in dictionary!</p>
           
                <AddWord handelInput={handleAddInput}/>
                <p className="ex1">Words from Dictionar:</p>
                <ul>
                {words.map((word) => (
                <li key={word}>{word}</li>
                ))}
            </ul>   
                
        
            <SearchWord  words={words}/>
           
        </div>
    );
}