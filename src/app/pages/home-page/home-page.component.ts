import { Component, OnInit } from '@angular/core';

import { IDish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dishes: IDish[] = [];
  constructor() {
    const dish1: IDish = {
      id: 0,
      name: 'Claro',
      chefName: 'Ran Shmueli',
      img: '/assets/claro.png',
    };
    const dish2: IDish = {
      id: 0,
      name: 'Lumina',
      chefName: 'Meir Adoni',
      img: '/assets/mizlala-gret-mullet-fillet.png',
    };
    const dish3: IDish = {
      id: 0,
      name: 'Tiger Lilly',
      chefName: 'Yanir Green',
      img: '/assets/tiger-lili.png',
    };
    this.dishes.push(dish1);
    this.dishes.push(dish2);
    this.dishes.push(dish3);
  }

  ngOnInit(): void {}
}
