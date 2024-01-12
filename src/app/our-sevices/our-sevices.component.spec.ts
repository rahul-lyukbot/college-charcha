import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSevicesComponent } from './our-sevices.component';

describe('OurSevicesComponent', () => {
  let component: OurSevicesComponent;
  let fixture: ComponentFixture<OurSevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSevicesComponent]
    });
    fixture = TestBed.createComponent(OurSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
