import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PublicView from './components/PublicView';
import PrivateView from './components/PrivateView';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="App">
        <Navigation isAuthenticated={isAuthenticated && <link to ="/Private">Private views</link>} login={login} logout={logout}  />
        <div className="Content">
         
          {isAuthenticated ? <PrivateView/> : <PublicView/>}

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
