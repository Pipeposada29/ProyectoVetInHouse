import { Component, OnInit } from '@angular/core';
import { GestionAdministradorService } from '../../../services/gestion-administrador.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfiguracionService } from '../../../services/configuracion.service';

@Component({
  selector: 'app-registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent implements OnInit {

 
  constructor( public GestionAdministradorService:GestionAdministradorService, private configuracion:ConfiguracionService , private formBuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.GestionAdministradorService.administrador= this.GestionAdministradorService.formularioRegistroAdministrador.value;
      console.log(this.GestionAdministradorService.administrador)
      console.log(this.GestionAdministradorService.administrador.Id_Admin)
    if(!this.GestionAdministradorService.administrador.Id_Admin){
      this.guardarAdministrador();
    }else{
      this.editarAdministrador();
    }

  }

  guardarAdministrador(){
    
    this.GestionAdministradorService.guardarAdministrador().subscribe(
      res=>{
        this.GestionAdministradorService.formularioRegistroAdministrador.reset();
       this.toastr.success("Se registro el administrador correctamente");
       
      },
      error =>{
        console.log(error);
      }
    )

    }
  editarAdministrador(){
    this.GestionAdministradorService.editarAdministrador().subscribe(

     
      res => { 
        this.GestionAdministradorService.formularioRegistroAdministrador.reset();
        this.toastr.info("Se actualizo el Administrador","Administrador");
        this.GestionAdministradorService.refrescarListaAdministradores();

      },
      error =>{
        console.log(error);
      }

    )
  }
}

  

