import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceRequestComponent } from './absence-request.component';

describe('AbsenceRequestComponent', () => {
  let component: AbsenceRequestComponent;
  let fixture: ComponentFixture<AbsenceRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceRequestComponent]
    });
    fixture = TestBed.createComponent(AbsenceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
