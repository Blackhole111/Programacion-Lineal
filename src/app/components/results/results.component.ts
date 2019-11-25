import { Component, OnInit, Input } from '@angular/core';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() resltado;

  constructor() { }

  ngOnInit() {
  }

  Resultado;


}
