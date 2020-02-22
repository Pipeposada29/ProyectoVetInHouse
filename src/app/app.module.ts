import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionAdministradorComponent } from './components/gestion-administrador/gestion-administrador.component';
import { RegistrarAdministradorComponent } from './components/gestion-administrador/registrar-administrador/registrar-administrador.component';
import { ListarAdministradorComponent } from './components/gestion-administrador/listar-administrador/listar-administrador.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { GestionAdministradorService } from './services/gestion-administrador.service';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';
import { FiltroAdministradorPipe } from './pipes/filtro-administrador.pipe'
import { ConfiguracionService } from './services/configuracion.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistrousuarioComponent } from './components/usuario/registrousuario/registrousuario.component';
import { Routes, RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AuthInterceptor } from './components/auth/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradorComponent,
    RegistrarAdministradorComponent,
    ListarAdministradorComponent,
    FiltroAdministradorPipe,
    UsuarioComponent,
    LoginComponent,
    RegistrousuarioComponent,
    HomeComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,// falta importar AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,

  ],
  providers: [GestionAdministradorService, ConfiguracionService, UsuarioComponent ,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
