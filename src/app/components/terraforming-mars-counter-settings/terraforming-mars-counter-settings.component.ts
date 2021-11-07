import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { TerraformingMarsCounterService } from '../terraforming-mars-counter/services/terraforming-mars-counter.service';

@Component({
  selector: 'app-terraforming-mars-counter-settings',
  templateUrl: './terraforming-mars-counter-settings.component.html',
  styleUrls: ['./terraforming-mars-counter-settings.component.scss'],
})
export class TerraformingMarsCounterSettingsComponent implements OnInit {
  formArray = new FormArray([]);
  constructor(private terraMarsService: TerraformingMarsCounterService) {}

  ngOnInit(): void {
    this.terraMarsService.getCountNumber().forEach(v => {
      this.formArray.push(new FormControl(v, Validators.min(1)));
    });
    this.formArray.valueChanges.subscribe(v => this.terraMarsService.setCounterNumber(v));
  }

  deleteCountNumber(idx: number) {
    this.formArray.removeAt(idx);
  }

  addCountNumber() {
    this.formArray.push(new FormControl(1));
  }
}
