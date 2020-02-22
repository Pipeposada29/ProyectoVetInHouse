import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegistrousuarioComponent } from './components/usuario/registrousuario/registrousuario.component';
import { RegistrarAdministradorComponent } from './components/gestion-administrador/registrar-administrador/registrar-administrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/auth/auth/auth.guardar';
import { ListarAdministradorComponent } from './components/gestion-administrador/listar-administrador/listar-administrador.component';
import { GestionAdministradorComponent } from './components/gestion-administrador/gestion-administrador.component';

const routes: Routes = [
    {  path: '', redirectTo: 'usuario/login', pathMatch: 'full'},
    { path:  'usuario', component: UsuarioComponent, 
        children:[
        {path:'registro', component: RegistrousuarioComponent},
        {path: 'login', component:LoginComponent}
    ]},
    {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
     {path:'administrador', component: GestionAdministradorComponent}, 
        // {path:'registrar', component: RegistrarAdministradorComponent},
        // {path:'listar', component: ListarAdministradorComponent}
    
   
        // 
    


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }