import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  games = [
    {
      title: 'Покорение марса',
      link: '/terraforming-mars',
      imgSrc: 'assets/terraforming-mars/terraforming-mars-main-picture.jpg',
      settings: true,
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: 'assets/cluedo/cluedo-main-picture.jpg',
    },
  ];

  constructor(private router: Router) {}

  onRoute(url: string): void {
    this.router.navigate([url]);
  }

  onRouteSettings(url: string, event: MouseEvent) {
    this.router.navigate([url, 'settings']);
    event.stopPropagation();
  }
}
