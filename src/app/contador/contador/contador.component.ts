import {Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template:  ` 
    <h1>{{titulo}}</h1>

<!--<button (click)="numero = numero+1;"> + 1</button> -->
<!--<button (click)="numero = numero -1;"> - 1</button> -->

<h3>La base es: <strong> {{base}} </strong></h3>

<button (click)="acumular(base);"> + {{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-base);"> - {{base}}</button>
 `

})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base : number = 5;
  
    acumular(valor : number) {
      this.numero += valor;
    }

}