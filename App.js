import React from 'react';
import './index.css';

import AddWord from './Input.js';

export default function MyApp(){
    
    return (
        <div>
            <h1>My dictionary!</h1>
            <hr />
            <p>Save your words in dictionary!</p>
            <AddWord  />
        </div>
    );
}