import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeticionComponent } from './peticion/peticion.component';
import { TitulosComponent } from './titulos/titulos.component';

@NgModule({
  declarations: [
    AppComponent,
    PeticionComponent,
    TitulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
