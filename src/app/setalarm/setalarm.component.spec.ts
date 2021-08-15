import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetalarmComponent } from './setalarm.component';

describe('SetalarmComponent', () => {
  let component: SetalarmComponent;
  let fixture: ComponentFixture<SetalarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetalarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetalarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
