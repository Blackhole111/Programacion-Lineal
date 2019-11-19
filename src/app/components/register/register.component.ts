import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  Datos = [];
  Valores = [];

  Lista = [];

  Dnombre:string;
  Dvalor:number;

  Agregar() {
    
    this.Datos.push(this.Dnombre);
    this.Valores.push(this.Dvalor);
    this.Lista.push({nombre:this.Dnombre,valor: this.Dvalor});
    this.Dnombre = null;
    this.Dvalor = null;
  }

  Resetear(){

  }

  Calcular(){
    
  }
  
}


