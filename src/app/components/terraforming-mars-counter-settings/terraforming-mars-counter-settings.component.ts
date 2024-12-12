import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TerraformingMarsCounterService } from '../terraforming-mars-counter/services/terraforming-mars-counter.service';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-terraforming-mars-counter-settings',
  templateUrl: './terraforming-mars-counter-settings.component.html',
  styleUrls: ['./terraforming-mars-counter-settings.component.scss'],
})
export class TerraformingMarsCounterSettingsComponent implements OnInit {
  formArray: FormArray = new FormArray([]);
  peopleArray: FormArray = new FormArray([]);
  ngUnsubscribe$ = new Subject();

  constructor(private terraMarsService: TerraformingMarsCounterService) {}

  ngOnInit(): void {
    this.terraMarsService.getCountNumber().forEach((v: number[]) => {
      this.formArray.push(new FormControl(v));
    });
    this.terraMarsService.getPeople().forEach((v: number[]) => {
      this.peopleArray.push(new FormControl(v));
    });
    this.formArray.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(v => this.terraMarsService.setCounterNumber(v));
    this.peopleArray.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(v => this.terraMarsService.setPeople(v));
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  getControl(i: number) {
    return this.formArray.controls[i] as FormControl;
  }

  getPeople(i: number) {
    return this.peopleArray.controls[i] as FormControl;
  }

  deleteCountNumber(idx: number) {
    this.formArray.removeAt(idx);
  }

  deletePeople(idx: number) {
    this.peopleArray.removeAt(idx);
  }

  addCountNumber() {
    this.formArray.push(new FormControl(1));
  }

  addPeople() {
    this.peopleArray.push(new FormControl(''));
  }

  dropCount(event: any) {
    const counts = [...this.formArray.value];
    moveItemInArray(counts, event.previousIndex, event.currentIndex);
    this.formArray.setValue(counts);
  }

  dropPeople(event: any) {
    const peoples = [...this.peopleArray.value];
    moveItemInArray(peoples, event.previousIndex, event.currentIndex);
    this.peopleArray.setValue(peoples);
  }
}
