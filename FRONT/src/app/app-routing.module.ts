import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregareditarpersonaComponent } from './components/agregareditarpersona/agregareditarpersona.component';
import { VistaPersonasComponent } from './components/vista-personas/vista-personas.component';

const routes: Routes = [
  {path: '', component: VistaPersonasComponent},
  {path: 'agregar', component: AgregareditarpersonaComponent},
  {path: 'editar/:id', component: AgregareditarpersonaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
