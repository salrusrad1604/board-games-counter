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
      imgSrc: '../../../assets/terraforming-mars/terraforming-mars-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
    {
      title: 'Клудо',
      link: '/cluedo',
      imgSrc: '../../../assets/cluedo/cluedo-main-picture.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
