import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, 
    private configuracion: ConfiguracionService, private formBuilder:FormBuilder) { }

    usuario:Usuario;
    formularioRegistroUsuario = this.formBuilder.group({      
      nombreusuario:["", [Validators.required,Validators.maxLength(20), Validators.pattern(this.configuracion.exLetrasNumeros)]],
      email:["", [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularCorreo)]],
      nombre:["", [Validators.required, Validators.maxLength(40)]],
      direccion:["", [Validators.required]],
      telefono:["", [Validators.required]],
      password:["", [Validators.required, Validators.maxLength(20), Validators.pattern(this.configuracion.exRegularPassword)]],
      confirmarpassword:["", [Validators.required]]

      
    },

    {
    validator:this.compararpassword.bind(this)
    
    });


  
    formularioLogin = this.formBuilder.group({
      NombreUsuario:["", [Validators.required, Validators.maxLength(20)]],
      Password:["", [Validators.required, Validators.maxLength(20)]]
    });
    
    get email(){
      return this.formularioRegistroUsuario.controls["email"];
    }
  
    get nombre(){
      return this.formularioRegistroUsuario.controls["nombre"];
    }
  
    get nombreusuario(){
      return this.formularioRegistroUsuario.controls["nombreusuario"];
    }
  
    get telefono(){
      return this.formularioRegistroUsuario.controls["telefono"];
    }
  
    get direccion(){
      return this.formularioRegistroUsuario.controls["direccion"];
    }
  
    get password(){
      return this.formularioRegistroUsuario.controls["password"];
    }
  
    get confirmarpassword(){
      return this.formularioRegistroUsuario.controls["confirmarpassword"];
    }
    get NombreUsuarioLogin(){
      return this.formularioLogin.controls["NombreUsuario"]
    }

    get PasswordLogin(){
      return this.formularioLogin.controls["Password"]
    }

    login(){
      this.usuario = this.formularioLogin.value;

      delete this.usuario['email'];
      delete this.usuario['nombre'];
      delete this.usuario['telefono'];
      delete this.usuario['direccion'];
      return this.http.post(this.configuracion.rootURL + '/Usuario/Login', this.usuario);
    }
    obtenerPerfil(){    
      return this.http.get(this.configuracion.rootURL + '/PerfilUsuario');
    }
  

    registrarUsuario(){
      this.usuario = this.formularioRegistroUsuario.value;
      delete this.usuario['confirmarpassword'];
      return this.http.post(this.configuracion.rootURL + '/Usuario/Registro', this.usuario)
    }

    compararpassword(formGroup:FormGroup){

      const password = formGroup.get('password');
      const confirmarpassword = formGroup.get('confirmarpassword');

      if (confirmarpassword.errors==null || 'passwordDiferente' in confirmarpassword) {
        if (password.value!= confirmarpassword.value) {
          confirmarpassword.setErrors({passwordDiferente:true})
          
        }else{confirmarpassword.setErrors(null)}
        
      }
    }
  
  
  
    

}
