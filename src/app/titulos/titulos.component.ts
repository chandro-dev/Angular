import { Component, OnInit } from '@angular/core';
import { persona } from '../Entidades/persona';
import { NumberValueAccessor } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit{
  url='https://localhost:7115/api/Estidiantes';
  constructor(private readonly http: HttpClient){}
  valor:string="";
   _persona = new persona();
  ngOnInit(): void{
  }
  change_name(): void{
  }
  btnsendclick(name:string):void{
    this.enviar_datos(name).subscribe(respuesta=>{
      console.log("Enviado");
      
    });
  }
  public enviar_datos(name:string){
    let body={

      name:name
    }
    return this.http.post(this.url,body);
  }
}
