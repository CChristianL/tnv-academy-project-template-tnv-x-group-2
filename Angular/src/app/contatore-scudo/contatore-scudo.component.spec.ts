import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoreScudoComponent } from './contatore-scudo.component';

describe('ContatoreScudoComponent', () => {
  let component: ContatoreScudoComponent;
  let fixture: ComponentFixture<ContatoreScudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoreScudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoreScudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
