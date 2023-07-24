import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCommentRatingComponent } from './game-comment-rating.component';

describe('GameCommentRatingComponent', () => {
  let component: GameCommentRatingComponent;
  let fixture: ComponentFixture<GameCommentRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCommentRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCommentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
