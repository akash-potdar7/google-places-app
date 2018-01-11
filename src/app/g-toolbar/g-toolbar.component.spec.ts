import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GToolbarComponent } from './g-toolbar.component';

describe('GToolbarComponent', () => {
  let component: GToolbarComponent;
  let fixture: ComponentFixture<GToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
