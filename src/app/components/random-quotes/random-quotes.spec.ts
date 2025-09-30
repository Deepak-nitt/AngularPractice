import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuotes } from './random-quotes';

describe('RandomQuotes', () => {
  let component: RandomQuotes;
  let fixture: ComponentFixture<RandomQuotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomQuotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomQuotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
