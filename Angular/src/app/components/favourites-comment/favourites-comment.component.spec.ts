import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesCommentComponent } from './favourites-comment.component';

describe('FavouritesCommentComponent', () => {
  let component: FavouritesCommentComponent;
  let fixture: ComponentFixture<FavouritesCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
