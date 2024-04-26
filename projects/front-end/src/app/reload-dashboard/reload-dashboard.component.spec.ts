import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadDashboardComponent } from './reload-dashboard.component';

describe('ReloadDashboardComponent', () => {
  let component: ReloadDashboardComponent;
  let fixture: ComponentFixture<ReloadDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReloadDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReloadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
