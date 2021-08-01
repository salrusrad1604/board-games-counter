import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraformingMarsCounterComponent } from './terraforming-mars-counter.component';

describe('TerraformingMarsCounterComponent', () => {
  let component: TerraformingMarsCounterComponent;
  let fixture: ComponentFixture<TerraformingMarsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerraformingMarsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraformingMarsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
