import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private router:Router, private toastr:ToastrService ) { }

 
  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('home');
    }
  }

  onSubmit(){
    this.usuarioService.login().subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);

        this.router.navigateByUrl('home')
      },
      error => {
        if (error.status == 400) {
          this.toastr.error('Nombre de Usuario o contraseña incorrectos')
          
        }
        else{
          console.log(error);
        }
      }
    )
  }

}
