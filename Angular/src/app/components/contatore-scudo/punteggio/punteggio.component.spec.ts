import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunteggioComponent } from './punteggio.component';

describe('PunteggioComponent', () => {
  let component: PunteggioComponent;
  let fixture: ComponentFixture<PunteggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunteggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunteggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
