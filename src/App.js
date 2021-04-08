import React from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Today from './views/Today';
import Extended from './views/Extended';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Navigation />
        <div>
          <main className="main-section">
            <Switch>
              <Route path="/today">
                <Today />
              </Route>
              <Route path="/extended">
                <Extended />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
