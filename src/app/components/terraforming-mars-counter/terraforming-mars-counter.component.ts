import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { makePrefix, prodPrefix, ResourceNames } from './services/interfaces';
import { TerraformingMarsCounterService } from './services/terraforming-mars-counter.service';

@Component({
  selector: 'app-terraforming-mars-counter',
  templateUrl: './terraforming-mars-counter.component.html',
  styleUrls: ['./terraforming-mars-counter.component.scss'],
})
export class TerraformingMarsCounterComponent {
  makePrefix = makePrefix;
  prodPrefix = prodPrefix;
  resourceNames = ResourceNames;

  selectResource = this.terraMarsService.selectResource;
  resourcesData$ = this.terraMarsService.resources;
  ratingData$ = this.terraMarsService.rating;

  constructor(private dialog: MatDialog, private terraMarsService: TerraformingMarsCounterService) {}

  setSelectResource(selRes: string): void {
    this.terraMarsService.setSelectResource(selRes);
  }

  incrementDecrementMake(value: number): void {
    this.terraMarsService.incrementDecrementMake(value);
  }

  produce(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data: { title: 'Produce?' } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.terraMarsService.pruduce();
      }
    });
  }

  reset(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data: { title: 'Reset?' } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.terraMarsService.reset();
      }
    });
  }
}
