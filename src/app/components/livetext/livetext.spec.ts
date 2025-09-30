import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livetext } from './livetext';

describe('Livetext', () => {
  let component: Livetext;
  let fixture: ComponentFixture<Livetext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livetext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livetext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
