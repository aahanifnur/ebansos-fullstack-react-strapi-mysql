import React from 'react';

function DataKategori(){
    return(
      <>
        <div class="container">
	<div class="row">
		<div class="col-lg-12 mt-2" style="min-height: 500px;">
			<div class="card">
			  <div class="card-header">
			    Data Kategori
			  </div>
				<div class="card-body">
					<div class="row">
						<div class="col">
							<a href="" class="btn btn-primary">Tambah Data</a>
						</div>
						<div class="col">
							<form action="" class="form-inline float-right">
								<input type="text" class="form-control"/>
								<input type="submit" class="btn btn-primary ml-2"/>
							</form>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col">
							<table class="table table-bordered table-striped">
								<tr>
									<th>NO</th>
									<th>Kode kategori</th>
									<th>Nama Kategori</th>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
      </>
    );
}

export default DataKategori;