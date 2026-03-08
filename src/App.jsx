import React from 'react';
import './App.css';
import RealResults from './components/RealResults/RealResults';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      {/* This tiny block forces the browser to remove its default borders */}
      <style>{`
        body { margin: 0; background-color: #1a1a1a; }
      `}</style>

      <RealResults />
      <Footer />
    </div>
  );
}

export default App;