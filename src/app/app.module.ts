import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeticionComponent } from './peticion/peticion.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms';

import{HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeticionComponent,
    TitulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
