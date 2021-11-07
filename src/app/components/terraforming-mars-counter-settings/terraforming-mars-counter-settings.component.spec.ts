import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraformingMarsCounterSettingsComponent } from './terraforming-mars-counter-settings.component';

describe('TerraformingMarsCounterSettingsComponent', () => {
  let component: TerraformingMarsCounterSettingsComponent;
  let fixture: ComponentFixture<TerraformingMarsCounterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerraformingMarsCounterSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraformingMarsCounterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
