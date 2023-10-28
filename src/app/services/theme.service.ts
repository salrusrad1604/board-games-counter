import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  KEY_STORAGE = 'THEME_KEY';

  isDark = new BehaviorSubject(this.getData());

  toggleTheme() {
    this.isDark.next(!this.isDark.value);
    this.setData(this.isDark.value);
  }

  public setData(data: any) {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify(data));
  }

  public getData(): boolean {
    return localStorage.getItem(this.KEY_STORAGE) ? JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string) : false;
  }
}
