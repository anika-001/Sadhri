import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalmroomComponent } from './calmroom.component';

describe('CalmroomComponent', () => {
  let component: CalmroomComponent;
  let fixture: ComponentFixture<CalmroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalmroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalmroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
