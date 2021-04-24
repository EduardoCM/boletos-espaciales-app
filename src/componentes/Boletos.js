import React, { Component } from 'react';

import axios from 'axios';

import { DataGrid } from '@material-ui/data-grid';

export default class Usuarios extends Component {

  state = {
    boletos: []
  };

  componentDidMount() {
    console.log('Entra a componentedidmount');
    axios.get('http://localhost:8085/api/v1/boletos')
    .then(res => {
      const boleto = res.data;
      this.setState({boletos: boleto});
    })
  }

  render(){

    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'origen', headerName: 'ORIGEN', width: 130 },
  { field: 'destino', headerName: 'DESTINO', width: 130 },
  { field: 'fechaSalida', headerName: 'FECHASALIDA', width: 130 },
  { field: 'fechaLlegada', headerName: 'FECHALLEGADA', width: 130 },
  { field: 'nombreNave', headerName: 'NOMBRENAVE', width: 130 },
  { field: 'precioBoleto', headerName: 'PRECIOBOLETO', width: 130 },
  { field: 'estacionEspacial', headerName: 'ESTACIONESPACIAL', width: 130 },
  { field: 'salaAbordaje', headerName: 'SALAABORDAJE', width: 130 }
];

    return(
      <div style={{ height: 400, width: '100%'}}>
        <DataGrid id={Math.random()} rows={this.state.boletos} columns={columns}> </DataGrid>
      </div>

    )
  }


}
