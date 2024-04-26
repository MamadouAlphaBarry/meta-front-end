import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceRequestListComponent } from './absence-request-list.component';

describe('AbsenceRequestListComponent', () => {
  let component: AbsenceRequestListComponent;
  let fixture: ComponentFixture<AbsenceRequestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceRequestListComponent]
    });
    fixture = TestBed.createComponent(AbsenceRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
