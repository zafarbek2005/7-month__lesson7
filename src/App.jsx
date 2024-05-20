import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import { Home } from './Components/Home';
import Admin from './Components/Admin/Admin';
import Create from './Components/Admin/Create/Create';
import Manage from './Components/Admin/Manage__user/Manage'
import ManageP from './Components/Admin/Manageproduct/Manageproduct';
import Pcreate from './Components/Admin/Productcreate/Productcreate'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="manage" element={<Manage />} />
          <Route path="ManageP" element={<ManageP />} />
          <Route path="Pcreate" element={<Pcreate />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
