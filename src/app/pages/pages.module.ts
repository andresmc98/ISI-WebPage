import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MaestrosComponent } from './maestros/maestros.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    NoticiasComponent,
    MaestrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumnosComponent,
    MaestrosComponent,
    NoticiasComponent
  ]
})
export class PagesModule { }
