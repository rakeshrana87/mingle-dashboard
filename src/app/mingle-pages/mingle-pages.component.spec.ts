import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinglePagesComponent } from './mingle-pages.component';

describe('MinglePagesComponent', () => {
  let component: MinglePagesComponent;
  let fixture: ComponentFixture<MinglePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinglePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinglePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
