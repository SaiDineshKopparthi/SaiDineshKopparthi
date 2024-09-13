import React, { useState } from 'react';

import LoadingScreen from './components/LoadingScreen';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';

import 'nes.css/css/nes.min.css';

function App() {

  const [loading, setLoading] = useState(true);
  const [hasClickedStarted, setHasClickedStarted] = useState(false);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        hasClickedStarted ? (
          <>
            <Header />
            <Home />
            <About />
          </>
        ) : (
          <Welcome whenClickedStarted={() => setHasClickedStarted(true)} />
        )
      )}
    </div>
  );
}

export default App;
