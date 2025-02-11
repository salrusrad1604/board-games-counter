import { Injectable } from '@angular/core';

export interface PhaseTenInterface {
  value: boolean;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhaseTenMasterCounterService {
  KEY_STORAGE = 'PHASE_TEN_MASTER_COUNTER';

  initData: PhaseTenInterface[] = [
    {
      value: false,
      label: '4 пары',
    },
    {
      value: false,
      label: '6 карт одного цвета',
    },
    {
      value: false,
      label: 'Последовательность из 4-х + квартет (4 одинаковых)',
    },
    {
      value: false,
      label: 'Последовательность из 8 карт',
    },
    {
      value: false,
      label: '7 карт одного цвета',
    },
    {
      value: false,
      label: 'Последовательность из 9 карт',
    },
    {
      value: false,
      label: '2 квартета',
    },
    {
      value: false,
      label: 'Одноцветная последовательность из 4-х + 3 одинаковые',
    },
    {
      value: false,
      label: '5 одинаковых + 3 одинаковых',
    },
    {
      value: false,
      label: '5 одинаковых + последовательность из 3-х одного цвета',
    },
  ];

  public setData(data: any) {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify(data));
  }

  public getData(): PhaseTenInterface[] {
    return localStorage.getItem(this.KEY_STORAGE) ? JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string) : this.initData;
  }
}
