import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesandvidComponent } from './notesandvid.component';

describe('NotesandvidComponent', () => {
  let component: NotesandvidComponent;
  let fixture: ComponentFixture<NotesandvidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesandvidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesandvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
