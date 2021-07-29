import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  gemes = [
    {
      title: 'Покорение марса',
      link: '/terraforming-mars',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
