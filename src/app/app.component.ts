import { Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProLineal';
  resltado: any;
  recibir(arg) {
    this.resltado = arg
  }
}
