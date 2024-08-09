import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Home from './Home';
import Contact from './Contact'
import Projects from './Projects'
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import useButtonClickSound from './useButtonClickSound';
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
