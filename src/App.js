import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import AdminPanel from './pages/admin/AdminPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
