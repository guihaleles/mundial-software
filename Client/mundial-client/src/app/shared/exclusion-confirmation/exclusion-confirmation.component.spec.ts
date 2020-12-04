import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionConfirmationComponent } from './exclusion-confirmation.component';

describe('ExclusionConfirmationComponent', () => {
  let component: ExclusionConfirmationComponent;
  let fixture: ComponentFixture<ExclusionConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusionConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
