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
      title: 'Клуэдо',
      link: '/cluedo',
      imgSrc: 'assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: '10 фаз мастер',
      link: '/phase-ten-master',
      imgSrc: 'assets/phase-ten-master/phase-ten-master-main-picture.jpg',
    },
    {
      title: '10 фаз',
      link: '/phase-ten',
      imgSrc: 'assets/phase-ten/phase-ten-main-picture.jpg',
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
