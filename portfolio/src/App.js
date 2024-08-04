import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Home from './Home';
import Contact from './Contact'
import NavBar from './NavBar';
import useButtonClickSound from './useButtonClickSound';
import 'nes.css/css/nes.min.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useButtonClickSound();

  return (
    <Router>
      <div className="App">
        {!loading && <NavBar />}
        {loading ? (
          <ProgressBar onComplete={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
