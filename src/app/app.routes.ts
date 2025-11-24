import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'laboratorio', component: LaboratorioComponent, canActivate: [AuthGuard] },
  { path: 'examenes', component: ExamenesComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
