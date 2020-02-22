import { Component, OnInit } from "@angular/core";
import { GestionAdministradorService } from "../../../services/gestion-administrador.service";
import { Administrador } from "../../../models/administrador";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-listar-administrador",
  templateUrl: "./listar-administrador.component.html",
  styleUrls: ["./listar-administrador.component.css"]
})
export class ListarAdministradorComponent implements OnInit {
  constructor(
    public GestionAdministradorService: GestionAdministradorService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.GestionAdministradorService.refrescarListaAdministradores();
  }

  llenarFormularioAdministrador(administrador: Administrador) {

    console.log("Listar", administrador);
      // administrador.Nombre = administrador.nombre;
      // administrador.Apellido = administrador.apellido;
      // administrador.Cedula = administrador.cedula;
      // administrador.Telefono = administrador.telefono;
      // administrador.Direccion = administrador.direccion;
      // administrador.Usuario = administrador.usuario;
      // administrador.Email = administrador.email;
      // administrador.Contrasena = administrador.contrasena;
      // administrador.Id_Admin = administrador.id_Admin;
    this.GestionAdministradorService.formularioRegistroAdministrador.patchValue(
      administrador
    );
  }

  eliminarAdministrador(Id_Admin:number) {
    if (confirm("¿Estas seguro que deseas eliminar el administrador?")) {
      this.GestionAdministradorService.eliminarAdministrador(Id_Admin).subscribe(
        res => {
          this.GestionAdministradorService.refrescarListaAdministradores();
          this.toastr.error(
            "Administrador eliminado con exito",
            "Eliminar administrador"
          );
        }
      );
    }
  }
}
