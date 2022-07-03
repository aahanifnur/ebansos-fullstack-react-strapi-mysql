import React from 'react';
import { useNavigate } from "react-router-dom";

function LandingPage(){
  const navigate = useNavigate()

    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand text-white" href="#page-top">Logo</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white js-scroll-trigger text-underline" href="#">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white js-scroll-trigger text-underline" href="#">Bantuan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white js-scroll-trigger text-underline" onClick={() => navigate('/login')} style={{cursor: 'pointer'}}>Login</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    
    <div className="jumbotron jumbotron-fluid" id="cover">
      <div className="container">
        <h1 className="display-4 font-weight-bold">Selamat Datang!</h1>
        <p className="lead">Sistem Informasi Bantuan Sosial untuk mendukung Kesejahteraan Masyarakat</p>
      </div>
    </div>

    <hr/>

    <div className="container">
      <h3 className="justify-content-center text-center font-weight-bold">Tentang <span className="text-success">E - Bansos</span></h3>
      <p className="justify-content-center text-center" id="desc">Elektronik Bansos (E-Bansos) adalah sistem informasi bantuan sosial secara online
        yang dapat mempermudah dalam pendataan dan pendistribusian bantuan sosial
        kepada masyarakat menengah ke bawah dan masyarakat yang terdampak bencana alam. 
      </p>
    </div>

    <hr/>
    <br/>
    <br/>

    <div className="container justify-content-center">
      <div className="row">
        <div className="col-lg-4">
          <img src="img/loginfo.png" className="rounded mx-auto d-block" alt="loginfo"/>
        </div>

        <div className="col-lg-4">
          <img src="img/infobansos.png" className="rounded mx-auto d-block" alt="infobansos"/>
        </div>

        <div className="col-lg-4">
          <img src="img/alur.png" className="rounded mx-auto d-block" alt="alurbansos"/>
        </div>
      </div>

      <br/><br/>

      <div className="row">
        <div className="col-lg-4">
          <h5 className="font-weight-bold text-center">Panduan Registrasi dan Login</h5>
          <p className="justify-content-center">Cek panduan lengkap registrasi dan panduan login <a className="text-underline text-info font-weight-bold" href="#">di sini</a></p>
        </div>
        <div className="col-lg-4">
          <h5 className="font-weight-bold text-center">Informasi Bantuan Sosial</h5>
          <p className="justify-content-center">Temukan informasi seputar bantuan sosial yang ditawarkan E - Bansos <a className="text-underline text-info font-weight-bold" href="#">di sini</a></p>
        </div>
        <div className="col-lg-4">
          <h5 className="font-weight-bold text-center">Alur Pencairan Bansos</h5>
          <p className="justify-content-center">Lihat alur pencairan bantuan sosial dengan lengkap <a className="text-underline text-info font-weight-bold" href="#">di sini</a></p>
        </div>
      </div>
    </div>

    <hr/>

    <div className="container">
      <h3 className="justify-content-center text-center font-weight-bold">Bantuan</h3>
      <img src="img/help.jpg" className="rounded mx-auto d-block" alt="bantuan"/>
      <p className="text-center" id="help">Dapatkan Bantuan dan Informasi Lebih Lanjut dengan Mengakses <a className="font-weight-bold"href="#">FAQ</a> atau Hubungi <a className="font-weight-bold text-muted" href="#">Hotline Kami</a></p>
    </div>
      </>
    );
}

export default LandingPage;