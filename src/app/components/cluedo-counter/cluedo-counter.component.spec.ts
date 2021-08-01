import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluedoCounterComponent } from './cluedo-counter.component';

describe('CluedoCounterComponent', () => {
  let component: CluedoCounterComponent;
  let fixture: ComponentFixture<CluedoCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CluedoCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CluedoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
