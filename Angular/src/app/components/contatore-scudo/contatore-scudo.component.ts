import { Component } from '@angular/core';

@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {

constructor () {

}

rCounter: number = 0;
bCounter: number = 0;

onClickB () {
  this.bCounter++;
  //localStorage.setItem("Contatore Punti", JSON.stringify(this.counter)); //DA FIXARE TUTTO BETA
}

onClickR () {
  this.rCounter++;
  //localStorage.setItem("Contatore Punti", JSON.stringify(this.counter)); //DA FIXARE TUTTO BETA
}

ngOnInit () {
  this.rCounter;
  this.bCounter;
}

}
