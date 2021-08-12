import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Field, FieldList, initFields } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CluedoCounterService {
  readonly KEY_STORAGE = 'CLUEDO';

  fields = new BehaviorSubject(initFields);
  values: BehaviorSubject<any> = new BehaviorSubject([[]]);

  playersNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this._getData();
  }

  private _setData() {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify({ values: this.values.value, playersNumber: this.playersNumber.value }));
  }

  private _getData() {
    if (localStorage.getItem(this.KEY_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string);
      this.values.next(data.values);
      this.playersNumber.next(data.playersNumber);
    } else {
      this.values.next(
        initFields.map((row: Field) => {
          return this.getAllCol().map(v => {
            return row[v].value ? row[v].value : '';
          });
        }),
      );
    }
  }

  getAllCol(): FieldList[] {
    return ['main', 'my', 'one', 'two', 'three', 'four', 'five', 'six'];
  }

  changeData(value: string, i: number, j: number): void {
    const newValues = JSON.parse(JSON.stringify(this.values.value));
    newValues[i][j] = value;
    this.values.next(newValues);
    this._setData();
  }

  reset(): void {
    this.values.next(
      initFields.map((row: Field) => {
        return this.getAllCol().map(v => {
          return row[v].value ? row[v].value : '';
        });
      }),
    );
    this.playersNumber.next(0);
    this._setData();
  }

  setPlayer(v: number): void {
    this.playersNumber.next(v);
    this._setData();
  }
}
