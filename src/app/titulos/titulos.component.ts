import { Component, OnInit } from '@angular/core';
import { persona } from '../Entidades/persona';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit{
  url="https://localhost:7115/weatherForecast";

  valor:string="";
   _persona = new persona();
  ngOnInit(): void{
  }
  change_name(): void{
    this._persona.cedula=3;
    this._persona.edad=4;
    this._persona.nombre="Soy daniel torres"
    this._persona.url="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"

  }
  btnsendclick(name:string):void{
    console.log(name);
    this.valor=name
    this._persona.nombre=name;
    fetch(this.url)
    .then((response) => response.json())
    .then(console.log);  
  }
}
