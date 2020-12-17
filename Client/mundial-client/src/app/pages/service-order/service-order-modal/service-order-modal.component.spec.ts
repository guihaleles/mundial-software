import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderModalComponent } from './service-order-modal.component';

describe('ServiceOrderModalComponent', () => {
  let component: ServiceOrderModalComponent;
  let fixture: ComponentFixture<ServiceOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
