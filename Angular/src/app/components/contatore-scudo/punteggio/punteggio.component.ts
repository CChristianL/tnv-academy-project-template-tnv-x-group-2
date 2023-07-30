import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'tnv-punteggio',
  templateUrl: './punteggio.component.html',
  styleUrls: ['./punteggio.component.scss']
})

//@Injectable()
//export class PunteggioComponent {
//    punteggio_fazione: number = 0;
//   IncrementarePunteggio() {
//    return ++this.punteggio_fazione;
//   }
  
//}
@Injectable()
export class PunteggioComponent  {
  
  punteggio_fazione = 0;

  private subject: BehaviorSubject<number>;

  constructor() {
    this.subject = new BehaviorSubject(this.punteggio_fazione);
  }

  public getPunteggio_fazione(): Observable<number> {
    return this.subject.asObservable();
  }
  public increment(): void {
    this.punteggio_fazione++;
  }
}
