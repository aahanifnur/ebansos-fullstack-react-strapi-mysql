import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import GetCookie from '../hooks/GetCookies'
import image1 from '../assets/img/informasi.png'
import image2 from '../assets/img/penolakan.png'

function HomeMasyarakat(){
    const navigate = useNavigate()
    const userName = GetCookie('nama')

    return(
        
        <>
        {/* Navbar */}
             <Navbar/>
        {/* Akhir Navbar */}

      <br/>
      <br/>
      <br/>
      
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

              

            {/* <section className="page-section bg-light" id="data"> */}
              <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="team-member">
                          <img className="mx-auto " src={image1} alt="..." />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Anda ingin melihat data penerima Bansos? Silahkan klik tautan dibawah ini!</p>
                        <a className="btn btn-success btn-l text-uppercase" onClick={() => navigate('/masy-penerima')}>Data Penerima</a> <br/> <br/>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="team-member">
                          <img className="mx-auto " src={image2} alt="..." />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Anda ingin melihat data penerima Bansos? Silahkan klik tautan dibawah ini!</p>
                        <a className="btn btn-success btn-l text-uppercase" href="MasyarakatPaket.php">Paket Bansos</a> <br/> <br/>
                      </div>
                    </div>
                  </div>
                </section>

            </div>
            {/* Content Row */}

          </div>

    
    {/* Footer */}
    <footer className="mt-5 bg-dark p-3 text-center"  style={{height: '50px', color: 'white', fontWeight: 'bold'}}>
      <p>E-Bansos &copy; 2021</p>
    </footer>
      </>
    );
}

export default HomeMasyarakat;