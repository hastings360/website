import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonnaPicciComponent } from './nonna-picci.component';

describe('NonnaPicciComponent', () => {
  let component: NonnaPicciComponent;
  let fixture: ComponentFixture<NonnaPicciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonnaPicciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonnaPicciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
