import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppServicesComponent } from './supp-services.component';

describe('SuppServicesComponent', () => {
  let component: SuppServicesComponent;
  let fixture: ComponentFixture<SuppServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppServicesComponent]
    });
    fixture = TestBed.createComponent(SuppServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
