import React, { useState } from 'react';
import './App.css';

import { useDispatch } from "react-redux"

import { getCurrentWeather } from './redux/CurrentWeather/actions'

function App() {

  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeather(location));
  }


  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
      </form>
    </div>
  );
}

export default App;
