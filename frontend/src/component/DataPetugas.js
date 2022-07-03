import React from 'react';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch'
import GetCookie from '../hooks/GetCookies'

function DataPetugas(){
  const token = GetCookie('jwt')
  const apiUrl = 'http://localhost:1337'
    const { loading, error, data } = useFetch (`${apiUrl}/api/data-petugases`, {
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
                <h4 align="left mb-2">Data Petugas</h4>
                <hr/>

                {/* fungsi untuk menampilkan tabel yang berisi data dalam database*/}
                <div className="table-responsive text-center">
                    <table className="table table-bordered table-hover align-middle">
                        <thead>
                            <tr className="table-success">
                                <th width="100px">No</th>
                                <th width="200px">NIK</th>
                                <th width="200px">Nama Petugas</th>
                                <th width="350px">Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map(value => (
                                <tr key={value.id}>
                                    <th width="250px">{value.id}</th>
                                    <th width="250px">{value.attributes.NIK}</th>
                                    <th width="250px">{value.attributes.nama}</th>
                                    <th width="250px">{value.attributes.alamat}</th>
                                </tr>

                            ))}
                          </tbody>
                    </table>
                </div>
            </div>
      {/* Akhir Content */}


    {/* Footer */}
    <footer className="mt-5 bg-dark p-3 text-center fixed-bottom" style={{height: '50px', color: 'white', fontWeight: 'bold'}}>
      <p>E-Bansos &copy; 2021</p>
    </footer>
      </>
    );
}

export default DataPetugas;