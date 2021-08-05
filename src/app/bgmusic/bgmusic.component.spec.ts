import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgmusicComponent } from './bgmusic.component';

describe('BgmusicComponent', () => {
  let component: BgmusicComponent;
  let fixture: ComponentFixture<BgmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgmusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
