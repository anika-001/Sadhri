import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallroomComponent } from './mallroom.component';

describe('MallroomComponent', () => {
  let component: MallroomComponent;
  let fixture: ComponentFixture<MallroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
