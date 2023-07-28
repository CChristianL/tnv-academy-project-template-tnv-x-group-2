import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesPreloadedCommentComponent } from './favourites-preloaded-comment.component';

describe('FavouritesPreloadedCommentComponent', () => {
  let component: FavouritesPreloadedCommentComponent;
  let fixture: ComponentFixture<FavouritesPreloadedCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesPreloadedCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesPreloadedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
