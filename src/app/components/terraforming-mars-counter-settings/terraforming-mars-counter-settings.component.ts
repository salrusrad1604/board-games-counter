import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TerraformingMarsCounterService } from '../terraforming-mars-counter/services/terraforming-mars-counter.service';

@Component({
  selector: 'app-terraforming-mars-counter-settings',
  templateUrl: './terraforming-mars-counter-settings.component.html',
  styleUrls: ['./terraforming-mars-counter-settings.component.scss'],
})
export class TerraformingMarsCounterSettingsComponent implements OnInit {
  formArray: FormArray = new FormArray([]);
  ngUnsubscribe$ = new Subject();

  constructor(private terraMarsService: TerraformingMarsCounterService) {}

  ngOnInit(): void {
    this.terraMarsService.getCountNumber().forEach((v: number[]) => {
      this.formArray.push(new FormControl(v));
    });
    this.formArray.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(v => this.terraMarsService.setCounterNumber(v));
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  getControl(i: number) {
    return this.formArray.controls[i] as FormControl;
  }

  deleteCountNumber(idx: number) {
    this.formArray.removeAt(idx);
  }

  addCountNumber() {
    this.formArray.push(new FormControl(1));
  }
}
