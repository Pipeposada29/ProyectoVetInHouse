import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private toastr: ToastrService) { }

  sw:number;

  onSubmit(){
    this.sw=0;
    this.usuarioService.registrarUsuario().subscribe(
      (respuesta:any) =>{
        if (respuesta.Succeeded) {
          this.usuarioService.formularioRegistroUsuario.reset();
          this.toastr.success("Usuario creado exitosamente")
          this.sw=1
          
        }else{
          respuesta.Errors.forEach(element => {

            switch(element.Code){
              case 'DuplicateUserName':
              this.toastr.error("El nombre de usuario ya existe", "Registro fallido");
              this.sw=1;
              break;

              case 'DuplicateEmail':
                this.toastr.error("El email ya existe", "Registro fallido");
                this.sw=1;
                break;

                default:
                  if(this.sw==0) this.toastr.error(element.Description, "Registro fallido")
            }
          });
        }
      }
    )
  }
  ngOnInit() {
  }

}
