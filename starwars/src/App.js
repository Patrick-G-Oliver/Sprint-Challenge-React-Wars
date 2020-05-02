import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [swapiData, setSwapiData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    axios.get("https://swapi.py4e.com/api/people/") 
      .then(response => {
        console.log('response', response.data)
        setSwapiData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <div className="App">
        <h1 className="Header">Characters</h1>
      </div>

      <Character
        swapiData = {swapiData}
      />
    </div>
  );
}

export default App;
