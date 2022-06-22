import './App.css';
import React from 'react';



import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';

function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<RegisterPage />} />
        <Route path="/Login" exact element={<LoginPage />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
