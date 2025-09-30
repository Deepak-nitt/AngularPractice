import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showpassword } from './showpassword';

describe('Showpassword', () => {
  let component: Showpassword;
  let fixture: ComponentFixture<Showpassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showpassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showpassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
