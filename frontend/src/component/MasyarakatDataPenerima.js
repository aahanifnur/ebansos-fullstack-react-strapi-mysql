import React from 'react';
import useFetch from '../hooks/useFetch'
import GetCookie from '../hooks/GetCookies'
import RemoveCookie from '../hooks/RemoveCookies'
import Navbar from './Navbar';

function MasyarakatDataPenerima(){
    const token = GetCookie('jwt')

    const apiUrl = 'http://localhost:1337'
    const { loading, error, data } = useFetch (`${apiUrl}/api/data-penerimas`, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    console.log(data)

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }

    function handelLogout() {
        RemoveCookie('jwt')
        RemoveCookie('role')
        refreshPage()
    }

    return(
      <>
        {/* Navbar */}
        <Navbar/>


        {/* Akhir Navbar */}

        {/* Content */}
        <div className="container-xl mt-4 p-5  bg-light">
            <h4 align="left mb-2">Data Penerima</h4>
            <hr/>
            <div className="col mb-2">
                <form  className="form-inline float-right" method="GET">
                    <input type="text" className="form-control" name="keyword" id="keyword"/>
                    <input type="submit" className="btn btn-primary ml-2" name="cari" id="cari" value="Cari"/>
                </form>
            </div>

                    {/* fungsi untuk menampilkan tabel yang berisi data dalam database */}
                    <div className="table-responsive text-center">
                        <table className="table table-bordered table-hover align-middle mt-2">
                            <thead>
                                <tr className="table-success">
                                    <th width="250px">ID Penerima</th>
                                    <th width="250px">NIK</th>
                                    <th width="250px">Nama Penerima</th>
                                    <th width="250px">Alamat</th>
                                    <th width="250px">Desa</th>
                                    <th width="250px">Kecamatan</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.data.map(value => (
                                <tr key={value.id}>
                                    <th width="250px">{value.id}</th>
                                    <th width="250px">{value.attributes.NIK}</th>
                                    <th width="250px">{value.attributes.namaPenerima}</th>
                                    <th width="250px">{value.attributes.alamat}</th>
                                    <th width="250px">{value.attributes.desa}</th>
                                    <th width="250px">{value.attributes.kecamatan}</th>
                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        {/* Akhir Content */}

    
        {/* Footer */}
        <footer className="mt-5 bg-dark p-3 text-center  fixed-bottom" style={{height: '50px', color: 'white', fontWeight: 'bold'}}>
        <p>E-Bansos &copy; 2021</p>
        </footer>
      </>
    );
}

export default MasyarakatDataPenerima;