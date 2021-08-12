import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { CluedoCounterService } from './services/cluedo-counter.service';
import { FieldList, type } from './services/interfaces';

@Component({
  selector: 'app-cluedo-counter',
  templateUrl: './cluedo-counter.component.html',
  styleUrls: ['./cluedo-counter.component.scss'],
})
export class CluedoCounterComponent {
  hideDiv = false;
  gemeStart = false;
  fieldTypeEnum = type;
  playersNumber = 1;
  dataSource = this.cluedoCounterService.fields;
  values = this.cluedoCounterService.values;
  displayedColumns: Observable<FieldList[]> = this.cluedoCounterService.playersNumber.pipe(
    map(v => {
      if (v === 0) {
        this.gemeStart = false;
        return this.cluedoCounterService.getAllCol();
      }
      return this.cluedoCounterService.getAllCol().slice(0, v + 2);
    }),
  );

  constructor(private dialog: MatDialog, public cluedoCounterService: CluedoCounterService) {}

  dataChanged(value: string, i: number, j: number) {
    this.cluedoCounterService.changeData(value, i, j);
  }

  onClick(v: string | null | undefined): void {
    if (v === 'hideDiv') {
      this.hideDiv = !this.hideDiv;
    }
    if (v === 'reset') {
      const dialogRef = this.dialog.open(DialogConfirmComponent, { data: { title: 'Reset?' } });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cluedoCounterService.reset();
          this.hideDiv = !this.hideDiv;
        }
      });
    }
    if (v === 'playerSelect') {
      this.cluedoCounterService.setPlayer(this.playersNumber);
      this.gemeStart = !this.gemeStart;
    }
  }
}
