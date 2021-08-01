import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { makePrefix, prodPrefix, ResourceNames } from './services/interfaces';
import { TerraformingMarsCounterService } from './services/terraforming-mars-counter.service';

@Component({
  selector: 'app-terraforming-mars-counter',
  templateUrl: './terraforming-mars-counter.component.html',
  styleUrls: ['./terraforming-mars-counter.component.scss'],
})
export class TerraformingMarsCounterComponent implements OnInit {
  makePrefix = makePrefix;
  prodPrefix = prodPrefix;
  resourceNames = ResourceNames;

  resourcesData$ = this.terraMarsService.resources;
  ratingData$ = this.terraMarsService.rating;

  constructor(private dialog: MatDialog, private terraMarsService: TerraformingMarsCounterService) {}

  ngOnInit(): void {}

  selectResource(selRes: string): void {
    this.terraMarsService.setSelectResource(selRes);
  }

  incrementDecrementMake(value: number): void {
    this.terraMarsService.incrementDecrementMake(value);
  }

  produce(): void {
    this.terraMarsService.pruduce();
  }

  reset(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.terraMarsService.reset();
      }
    });
  }
}
