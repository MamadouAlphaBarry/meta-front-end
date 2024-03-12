import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcreateReportComponent } from './ecreate-report.component';

describe('EcreateReportComponent', () => {
  let component: EcreateReportComponent;
  let fixture: ComponentFixture<EcreateReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcreateReportComponent]
    });
    fixture = TestBed.createComponent(EcreateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
