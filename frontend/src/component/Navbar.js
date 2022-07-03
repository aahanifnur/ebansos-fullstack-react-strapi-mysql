import React from 'react'
import { useNavigate } from "react-router-dom";
import RemoveCookie from '../hooks/RemoveCookies'

function Navbar() {
    const navigate = useNavigate()

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }

    function handelLogout() {
        RemoveCookie('jwt')
        RemoveCookie('role')
        RemoveCookie('nama')
        refreshPage()
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">E-Bansos</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" onClick={() => navigate('/auth')} style={{cursor: 'pointer'}}>Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="penjelasan_msy.php">Informasi </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="alur_msy.php">Alur </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => {navigate('/'); handelLogout()}} style={{cursor: 'pointer'}}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar