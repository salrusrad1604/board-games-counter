import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { makePrefix, prodPrefix, ResourceNames } from './services/interfaces';
import { TerraformingMarsCounterService } from './services/terraforming-mars-counter.service';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-terraforming-mars-counter',
  templateUrl: './terraforming-mars-counter.component.html',
  styleUrls: ['./terraforming-mars-counter.component.scss'],
})
export class TerraformingMarsCounterComponent {
  ngUnsubscribe$ = new Subject();

  makePrefix = makePrefix;
  prodPrefix = prodPrefix;
  resourceNames = ResourceNames;

  buttonCoutnValues = this.terraMarsService.getCountNumber();

  selectResource = this.terraMarsService.selectResource;
  resourcesData$ = this.terraMarsService.resources;
  ratingData$ = this.terraMarsService.rating;
  generation$ = this.terraMarsService.generation;
  firtsPeople = '';

  constructor(private dialog: MatDialog, private terraMarsService: TerraformingMarsCounterService) {}

  ngOnInit() {
    this.generation$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(v => (this.firtsPeople = this.terraMarsService.getPeopleByGeneration(v)));
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  setSelectResource(selRes: string): void {
    this.terraMarsService.setSelectResource(selRes);
  }

  incrementDecrementMake(value: number): void {
    this.terraMarsService.incrementDecrementMake(value);
  }

  produce(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data: { title: 'Produce?' } });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          this.terraMarsService.pruduce();
        }
      });
  }

  reset(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data: { title: 'Reset?' } });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          this.terraMarsService.reset();
        }
      });
  }
}
