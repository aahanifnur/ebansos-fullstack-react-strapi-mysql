import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import GetCookie from '../hooks/GetCookies'
import image1 from '../assets/img/informasi.png'
import image2 from '../assets/img/penolakan.png'

function HomePetugas(){

    const navigate = useNavigate()
    const userName = GetCookie('nama')

    return(
      <>
       {/* Navbar */}
       
       <Navbar />

        {/* Akhir Navbar */}
        {/* Content */}

    <div className="container index">
      <div className="row">
        <div className="col-lg-12 mt-2">
            <div className="container alert alert-success">
              <h3>Hallo, {userName}</h3>
              <p className="lead">Selamat datang di halaman level</p>
            </div>
        </div>
      </div>

       {/* Content Row */}
       <div className="row">

              {/* Petugas */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Petugas Bansos</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">data petugas</div>
                        <p className="card-text" onClick={() => {navigate('/petugas')}} style={{cursor: 'pointer'}}><u>Lihat Data</u></p>
                      </div>
                      <div className="col-auto">
                        <i className="bi bi-person-bounding-box"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Penerima */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Penerima Bansos</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">data penerima</div>
                        <p className="card-text" onClick={() => {navigate('/penerima')}} style={{cursor: 'pointer'}}><u>Lihat Data</u></p>
                      </div>
                      <div className="col-auto">
                      <i className="bi bi-people-fill bi-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paket */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Paket Bansos</div>
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">data paket</div>
                        <p className="card-text" onClick={() => {navigate('/paket')}} style={{cursor: 'pointer'}}><u>Lihat Data</u></p>
                      </div>
                      <div className="col-auto">
                      <i className="bi bi-cart-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribusi */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Bansos Terdistribusi</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">data checkout</div>
                        <p className="card-text" onClick={() => {navigate('/checkout')}} style={{cursor: 'pointer'}}><u>Lihat Data</u></p>
                      </div>
                      <div className="col-auto">
                      <i className="bi bi-cart-check-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              

            {/* <section className="page-section bg-light" id="data"> */}
              

            </div>
            {/* Content Row */}

          </div>

    
    {/* Footer */}
    <footer className="mt-5 bg-dark p-3 text-center fixed-bottom"  style={{height: '50px', color: 'white', fontWeight: 'bold'}}>
      <p>E-Bansos &copy; 2021</p>
    </footer>
      </>
    );
}

export default HomePetugas;