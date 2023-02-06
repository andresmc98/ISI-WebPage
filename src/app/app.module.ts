import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MaestrosComponent } from './maestros/maestros.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    AlumnosComponent,
    MaestrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
