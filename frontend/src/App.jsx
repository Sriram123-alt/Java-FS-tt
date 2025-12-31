import React from 'react';
import Form from './pages/Form.jsx';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/l" element={<Form />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
