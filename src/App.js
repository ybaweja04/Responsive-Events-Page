import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import DetailPage from './components/DetailPage';
import RegistrationPage from './components/RegistrationPage'; // Import the registration page
import './styles/App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/event/:id" element={<DetailPage />} />
          <Route path="/register" element={<RegistrationPage />} /> {/* Add route for registration page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
