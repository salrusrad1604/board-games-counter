import { Injectable } from '@angular/core';

export interface PhaseTenInterface {
  value: boolean;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhaseTenCounterService {
  KEY_STORAGE = 'PHASE_TEN_COUNTER';

  initData: PhaseTenInterface[] = [
    {
      value: false,
      label: '2 набора по 3 карты',
    },
    {
      value: false,
      label: '1 набор из 3-х карт + 1 последовательность из 4-х',
    },
    {
      value: false,
      label: '1 набор из 4-х карт + 1 последовательность из 4-х',
    },
    {
      value: false,
      label: '1 последовательность из 7 карт',
    },
    {
      value: false,
      label: '1 последовательность из 8 карт',
    },
    {
      value: false,
      label: '1 последовательность из 9 карт',
    },
    {
      value: false,
      label: '2 набора по 4 карты',
    },
    {
      value: false,
      label: '7 карт одного цвета',
    },
    {
      value: false,
      label: '1 набор из 5-ти карт + 1 набор из 2-х карт',
    },
    {
      value: false,
      label: '1 набор из 5-ти карт + 1 набор из 3-х карт',
    },
  ];

  public setData(data: any) {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify(data));
  }

  public getData(): PhaseTenInterface[] {
    return localStorage.getItem(this.KEY_STORAGE) ? JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string) : this.initData;
  }
}
