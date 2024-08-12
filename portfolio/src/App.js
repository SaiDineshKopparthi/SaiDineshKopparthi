import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Home from './components/Home';
import Contact from './components/Contact'
import Projects from './components/Projects'
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import useButtonClickSound from './hooks/useButtonClickSound';
import 'nes.css/css/nes.min.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useButtonClickSound();

  return (
    <Router basename="/SaiDineshKopparthi">
      <div className="App">
        {!loading && <NavBar />}
        {loading ? (
          <ProgressBar onComplete={() => setLoading(false)} />
        ) : (
          <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <ScrollToTop /> 
          </>
        )}
        
      </div>
    </Router>
  );
};

export default App;
