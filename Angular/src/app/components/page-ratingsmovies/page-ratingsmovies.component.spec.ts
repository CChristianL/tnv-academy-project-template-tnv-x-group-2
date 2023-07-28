import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRatingsmoviesComponent } from './page-ratingsmovies.component';

describe('PageRatingsmoviesComponent', () => {
  let component: PageRatingsmoviesComponent;
  let fixture: ComponentFixture<PageRatingsmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRatingsmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRatingsmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
