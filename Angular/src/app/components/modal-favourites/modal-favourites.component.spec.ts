import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavouritesComponent } from './modal-favourites.component';

describe('ModalFavouritesComponent', () => {
  let component: ModalFavouritesComponent;
  let fixture: ComponentFixture<ModalFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
