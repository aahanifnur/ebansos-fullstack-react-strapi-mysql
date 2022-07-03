import React from 'react';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import DataPenerima from './component/DataPenerima';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import MasyarakatDataPenerima from './component/MasyarakatDataPenerima';
import Auth from './component/Auth';
import DataPaket from './component/DataPaket';
import DataPetugas from './component/DataPetugas';
import HomePetugas from './component/HomePetugas';
import HomeMasyarakat from './component/HomeMasyarakat';
import DataCheckout from './component/DataCheckout';
import EditPaket from './component/EditPaket';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact/>
        <Route path="/masy-penerima" element={<MasyarakatDataPenerima/>} exact/>
        <Route path="/penerima" element={<DataPenerima/>} exact/>
        <Route path="/editpaket" element={<EditPaket/>} exact/>
        <Route path="/paket" element={<DataPaket/>} exact/>
        <Route path="/checkout" element={<DataCheckout/>} exact/>
        <Route path="/admin" element={<HomePetugas/>} exact/>
        <Route path="/petugas" element={<DataPetugas/>} exact/>
        <Route path="/home" element={<HomeMasyarakat/>} exact/>
        <Route path="/login" element={<LoginPage/>} exact/>
        <Route path="/register" element={<RegisterPage/>} exact/>
        <Route path="/auth" element={<Auth/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
