import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Today from './views/Today';
import Extended from './views/Extended';

import Container from '@material-ui/core/Container';

function App() {

  const [view, setView] = useState(0);

  return (
    <div className="App">
      <Header />
      <Navigation toggle={setView} view={view} />
      <main className="main-section">
        <Container maxWidth="md">
          {view ? <Extended /> : <Today />}
        </Container>
      </main>
    </div>
  );
}

export default App;
