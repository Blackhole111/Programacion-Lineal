import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import {ResultsComponent} from '../results/results.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isCollapsed = true;
  @Output() rest = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  Datos = [];
  DatosOrden = [];
  Valores = [];

  Lista = [];

  Dnombre:string;
  Dvalor:number;

  resultado;


  Agregar() {
    
    this.Datos.push(this.Dnombre);
    this.DatosOrden.push(this.Dvalor);
    this.Valores.push(this.Dvalor);
    this.Lista.push({nombre:this.Dnombre,valor: this.Dvalor});
    this.Dnombre = null;
    this.Dvalor = null;
  }

  Resetear(){
    this.Datos = [];
    this.DatosOrden = [];
    this.Valores = [];
    this.Lista = [];
    this.Dnombre = null;
    this.Dvalor = null;
  }

  Calcular(){
    this.Valores.sort(function (a, b){
      return a - b;
  });

  if(this.Valores.length >= 2){
    var n = this.Valores.length;
    var mayor = this.Valores[n-1];
    var menor = this.Valores[0];
  
    var rango = mayor - menor;

    var variabilidad = ((rango/mayor)*100)/n;

    if(variabilidad <= 3) this.resultado = this.PromedioMovilSimple();
    else this.resultado = this.RegresionLinealSimple();
  }
  else{

  }
  
  this.rest.emit(this.resultado);
  }

  PromedioMovilSimple(){
    
    this.Valores.sort(function (a, b){
      return a - b;
  });

  var n = this.Valores.length;

  var numero1 = this.Valores[n-1];
  var numero2 = this.Valores[n-2];
  var resul = (numero1 + numero2)/2;
  var res = resul.toFixed(2);

  return resul;

  }

  RegresionLinealSimple(){

    var n = this.Valores.length;
    var SumatoriaX = 0;
    var SumatoriaY = 0;
    var XCuadrado = 0;
    var XY = 0;
    var numero = 0;

    for(var a=0; a<=n;a++){
      SumatoriaX += a;
      XCuadrado += ((a)*(a));
    }

    for(var as in this.DatosOrden){
      numero = parseFloat(this.DatosOrden[as]);
      SumatoriaY += numero;
      XY += numero*(parseFloat(as)+1);
    }


    var b = ((n*XY)-(SumatoriaX*SumatoriaY))/((n*XCuadrado)-(SumatoriaX*SumatoriaX));
    var PromedioX = SumatoriaX/n;
    var PromedioY = SumatoriaY/n;
    var a = PromedioY - (b*PromedioX);
    var resul = a+b*(n+1);
    var res = resul.toFixed(2);

    return res;

  }
  


  
}


