import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Home from './Home';
import 'nes.css/css/nes.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, [loading]);

  return (
    <div className="App">
      {loading ? (<ProgressBar onComplete={() => setLoading(false)} />) : (<Home/>)}
    </div>
  );
};

export default App;
