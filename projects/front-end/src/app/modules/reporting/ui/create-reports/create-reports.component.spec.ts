import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportsComponent } from './create-reports.component';

describe('CreateReportsComponent', () => {
  let component: CreateReportsComponent;
  let fixture: ComponentFixture<CreateReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReportsComponent]
    });
    fixture = TestBed.createComponent(CreateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
