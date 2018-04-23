import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyStatusComponent } from './weekly-status.component';

describe('WeeklyStatusComponent', () => {
  let component: WeeklyStatusComponent;
  let fixture: ComponentFixture<WeeklyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
