import React from 'react';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch'
import GetCookie from '../hooks/GetCookies'

function DataCheckout(){
    const token = GetCookie('jwt')
    const apiUrl = 'http://localhost:1337'
      const { loading, error, data } = useFetch (`${apiUrl}/api/data-checkouts`, {
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
                <h4 align="left mb-2">Riwayat Checkout</h4>
                <hr/>

                {/* fungsi untuk menampilkan tabel yang berisi data dalam database*/}
                <div className="table-responsive text-center">
                    <table className="table table-bordered table-hover align-middle">

                        <thead>
                            <tr className="table-success">
                                <th width="150px">No</th>
                                <th width="250px">NIK</th>
                                <th width="250px">Nama Penerima</th>
                                <th width="250px">Alamat</th>
                                <th width="250px">Tanggal Checkout</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map(value => (
                                <tr key={value.id}>
                                    <th width="250px">{value.id}</th>
                                    <th width="250px">{value.attributes.NIK}</th>
                                    <th width="250px">{value.attributes.namaPenerima}</th>
                                    <th width="250px">{value.attributes.alamat}</th>
                                    <th width="250px">{value.attributes.tanggal}</th>
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


    {/* Akhir Footer */}
      </>
    );
}

export default DataCheckout;