import React, { Component } from 'react';


import {Grid, TextField, Button} from '@material-ui/core'

import axios from 'axios';

class RegistroBoletos extends Component {

  constructor(){
    super();
    this.state = {
      origen: '',
      destino: '',
      fechaSalida: '',
      fechaLlegada: '',
      nombreNave: '',
      precioBoleto: '',
      estacionEspacial: '',
      salaAbordaje: ''
    }
  }


  enviarRegistro = (e) => {
    e.preventDefault();
    console.log('Registrando Boleto');
    console.log(this.state);

 const boleto = {
   origen: this.state.origen,
   destino: this.state.destino,
   fechaSalida: this.state.fechaSalida,
   fechaLlegada: this.state.fechaLlegada,
   nombreNave: this.state.nombreNave,
   precioBoleto: this.state.precioBoleto,
   estacionEspacial: this.state.estacionEspacial,
   salaAbordaje: this.state.salaAbordaje
 }

 axios.post('http://localhost:8085/api/v1/boletos', boleto)
   .then(res => {
     console.log(res)
     console.log(res.data);
   })

   console.log('Se envio la informacion');

  }


  render() {

   return(
     <div>
       <form>

       <Grid container spacing={2}>
           <Grid item xs={12}>
             <TextField label="Origen"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({origen: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Destino"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({destino: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Fecha Salida"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({fechaSalida: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Fecha Llegada"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({fechaLlegada: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Nombre Nave"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({nombreNave: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Precio Boleto"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({precioBoleto: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Estacion Espacial"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({estacionEspacial: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
             <TextField label="Sala Abordaje"
                        variant="outlined"
                        required
                        type="text"
                        onChange={e => this.setState({salaAbordaje: e.target.value})}/>
           </Grid>

           <Grid item xs={12}>
               <Button variant="contained"
                      onClick={this.enviarRegistro}
                      color="primary">
                    Registrar Boleto
               </Button>

           </Grid>
       </Grid>

       </form>
     </div>
   )
  }
}

export default RegistroBoletos;
