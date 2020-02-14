import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionAdministradorComponent } from './components/gestion-administrador/gestion-administrador.component';
import { RegistrarAdministradorComponent } from './components/gestion-administrador/registrar-administrador/registrar-administrador.component';
import { ListarAdministradorComponent } from './components/gestion-administrador/listar-administrador/listar-administrador.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { GestionAdministradorService } from './services/gestion-administrador.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';
import { FiltroAdministradorPipe } from './pipes/filtro-administrador.pipe'
import { ConfiguracionService } from './services/configuracion.service';

@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradorComponent,
    RegistrarAdministradorComponent,
    ListarAdministradorComponent,
    FiltroAdministradorPipe
  ],
  imports: [
    BrowserModule, // falta importar AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [GestionAdministradorService, ConfiguracionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
