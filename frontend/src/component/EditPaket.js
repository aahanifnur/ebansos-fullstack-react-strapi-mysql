import React from 'react';
import Navbar from './Navbar';

function EditPaket(){
    return(
      <>
      <Navbar/>
        {/* Content */}
            <div className="container-xl mt-4 p-5  bg-light">
                <h4 align="left mb-2">Edit Paket</h4>
                <hr/>
                <div className="row">
                    <div className="col">
                        <form action="edit_paket_proses.php?id_paket=<?=$id_paket?>" method="POST" enctype="multipart/form-data">
                            <div className="form-group row">
                                <label for="nama_paket" className="col-sm-3 col-form-label" value="<?= $baris['nama_paket']; ?>">Nama Paket</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control mt-1 mb-1" name="nama_paket" id="nama_paket" value="<?= $baris['nama_paket']; ?>"/>
                                </div>
                                <label for="isi_paket" className="col-sm-2 col-form-label" >Isi Paket</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control mt-1 mb-1" name="isi_paket" id="isi_paket" value="<?= $baris['isi_paket']; ?>"/>
                                </div>
                                <div className="col-sm-1">
                                    <button type="submit" name="tambah" id="tambah" value="tambah" className="btn btn-primary mt-1">Edit</button>
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
                            </tr>
                        </thead>
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

export default EditPaket;