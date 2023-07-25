import { Component } from '@angular/core';

@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {

constructor () {

}

counter: number = 0;

onClick () {
  this.counter++;
  localStorage.setItem("Contatore Punti", JSON.stringify(this.counter)); //DA FIXARE TUTTO BETA
}

ngOnInit () {
  this.counter;
}

}
