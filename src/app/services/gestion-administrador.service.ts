import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Administrador } from '../models/administrador';
import { observable } from 'rxjs';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class GestionAdministradorService {
  formularioRegistroAdministrador = this.formBuilder.group({

    IdAdministrador:[0],
    Id_Admin: [0], //se debe enviar tambien el ID a la actualización
    Nombre:["", [Validators.required, Validators.pattern(this.configuracion.exRegularLetras)]],
    Apellido:["", [Validators.required, Validators.pattern(this.configuracion.exRegularLetras)]],
    Cedula:["", [Validators.required, Validators.pattern(this.configuracion.exRegularNumeros)]],
    Telefono:["", [Validators.required, Validators.pattern(this.configuracion.exRegularNumeros), Validators.minLength(7), Validators.maxLength(15)]],
    Email:["", [Validators.required, Validators.pattern(this.configuracion.exRegularCorreo)]],
    Direccion:["", [Validators.required, Validators.maxLength(80)]],
    Cumpleanos:["", [Validators.required]],
    Usuario:["", [Validators.required]],
    Contrasena:["", [Validators.required]]

    });

 
  administrador: Administrador;
  listaAdministrador: Administrador[];
  filtroAdministrador:'';

  
  get Nombre(){
    return this.formularioRegistroAdministrador.controls["Nombre"];
  }
  get Apellido(){
    return this.formularioRegistroAdministrador.controls["Apellido"];
  }
  get Cedula(){
    return this.formularioRegistroAdministrador.controls["Cedula"];
  }
  get Telefono(){
    return this.formularioRegistroAdministrador.controls["Telefono"];
  }
  get Direccion(){
    return this.formularioRegistroAdministrador.controls["Direccion"];
  }
  get Cumpleanos(){
    return this.formularioRegistroAdministrador.controls["Cumpleanos"];
  }
  get Email(){
    return this.formularioRegistroAdministrador.controls["Email"];
  }
  get Usuario(){
    return this.formularioRegistroAdministrador.controls["Usuario"];
  }
  get Contrasena(){
    return this.formularioRegistroAdministrador.controls["Contrasena"];
  }
  get Id_Admin(){
    return this.formularioRegistroAdministrador.controls["Id_Admin"];
  }


  constructor(private http: HttpClient, private configuracion:ConfiguracionService, private formBuilder:FormBuilder) { }

  guardarAdministrador() {
    if(this.administrador.Id_Admin == null ) {
      this.administrador.Id_Admin = 0 ;
    }

    return this.http.post( this.configuracion.rootURL + '/Administradores', this.administrador );
  }

  editarAdministrador(){
    console.log(this.administrador);
    return this.http.put(this.configuracion.rootURL + '/Administradores/' + this.administrador.Id_Admin, this.administrador);
  }

  refrescarListaAdministradores() {
    this.http.get(this.configuracion.rootURL + '/Administradores')
    .toPromise() // Nos devuelve una sola cosa 
   /*Entonces*/ .then(res =>  this.listaAdministrador = res as Administrador[] );
  }

  eliminarAdministrador(Id_Admin:number){

    return this.http.delete(this.configuracion.rootURL + '/Administradores/' + Id_Admin);
  }

}
