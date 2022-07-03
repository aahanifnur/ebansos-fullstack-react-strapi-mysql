import React from 'react';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch'
import GetCookie from '../hooks/GetCookies'
import { useNavigate } from "react-router-dom";

function DataPaket(){
    const navigate = useNavigate()
    const token = GetCookie('jwt')
    const apiUrl = 'http://localhost:1337'
    const { loading, error, data } = useFetch (`${apiUrl}/api/data-pakets`, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    console.log(data)

    return(
      <>
        <Navbar/>

        {/* Content */}
     <div className="container-xl mt-4 p-5  bg-light">
                <h4 align="left mb-2">Data Paket</h4>
                <hr/>
                <div className="row">
                    <div className="col">
                        <form method="POST">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nama Paket</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control mt-1 mb-1" name="nama_paket" id="nama_paket"/>
                                </div>
                                <label className="col-sm-2 col-form-label">Isi Paket</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control mt-1 mb-1" name="isi_paket" id="isi_paket"/>
                                </div>
                                <div className="col-sm-1">
                                    <button type="submit" name="tambah" id="tambah" className="btn btn-primary mt-1">Tambah<a href="tambah_kategori.php"/></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* fungsi untuk menampilkan tabel yang berisi data dalam database*/}
                <div className="table-responsive text-center">
                    <table className="table table-bordered table-hover align-middle">

                        <thead>
                            <tr className="table-success">
                                <th width="150px">No</th>
                                <th width="250px">Nama Paket</th>
                                <th width="250px">Isi Paket</th>
                                <th width="150px">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map(value => (
                                <tr key={value.id}>
                                    <th width="250px">{value.id}</th>
                                    <th width="250px">{value.attributes.namaPaket}</th>
                                    <th width="250px">{value.attributes.isiPaket}</th>
                                    <th width="150px">
                                        <p  onClick={() => {navigate('/editpaket')}} style={{cursor: 'pointer'}}>edit</p> 
                                        delete
                                    </th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
    	{/* Akhir Content */}


    {/* Footer */}
    <footer className="mt-5 bg-dark p-3 text-center" style={{height: '50px', color: 'white', fontWeight: 'bold'}}>
      <p>E-Bansos &copy; 2021</p>
    </footer>
      </>
    );
}

export default DataPaket;