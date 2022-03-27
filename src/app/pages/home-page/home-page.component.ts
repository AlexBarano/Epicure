import { Component, OnInit } from '@angular/core';

import { ICard } from 'src/app/models/card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  popRestaurants: ICard[] = [];
  signatureDishes: ICard[] = [];
  chefsRestaurants: ICard[] = [];
  icons: { img: string; content: string }[] = [];
  constructor() {
    const icon1: { img: string; content: string } = {
      img: 'assets/icons/spicy-icon.svg',
      content: 'Spicy',
    };
    const icon2: { img: string; content: string } = {
      img: 'assets/icons/vegetarian.svg',
      content: 'Vegetatian',
    };
    const icon3: { img: string; content: string } = {
      img: 'assets/icons/vegan-icon.svg',
      content: 'Vegan',
    };

    this.icons.push(icon1);
    this.icons.push(icon2);
    this.icons.push(icon3);

    const res1: ICard = {
      id: 0,
      lowerTitle: 'Claro',
      description: 'Ran Shmueli',
      img: '/assets/pictures/claro.png',
    };
    const res2: ICard = {
      id: 1,
      lowerTitle: 'Lumina',
      description: 'Meir Adoni',
      img: '/assets/pictures/mizlala-gret-mullet-fillet.png',
    };
    const res3: ICard = {
      id: 2,
      lowerTitle: 'Tiger Lilly',
      description: 'Yanir Green',
      img: '/assets/pictures/tiger-lili.png',
    };
    this.popRestaurants.push(res1);
    this.popRestaurants.push(res2);
    this.popRestaurants.push(res3);

    const sigDish1: ICard = {
      id: 0,
      upperTitle: 'Tiger Lilly',
      lowerTitle: 'Pad Ki Mao',
      description:
        'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
      img: '/assets/pictures/claro.png',
      price: '88',
    };
    const sigDish2: ICard = {
      id: 1,
      upperTitle: 'Kab Kem',
      lowerTitle: 'Garbanzo Frito',
      description:
        'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
      img: '/assets/pictures/mizlala-gret-mullet-fillet.png',
      price: '98',
    };
    const sigDish3: ICard = {
      id: 2,
      upperTitle: 'Popina',
      lowerTitle: 'Smoked Pizza',
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      img: '/assets/pictures/tiger-lili.png',
      price: '65',
    };
    this.signatureDishes.push(sigDish1);
    this.signatureDishes.push(sigDish2);
    this.signatureDishes.push(sigDish3);

    const chefRes1: ICard = {
      id: 0,
      lowerTitle: 'Onza',
      img: '/assets/pictures/onza.png',
    };
    const chefRes2: ICard = {
      id: 1,
      lowerTitle: 'Kitchen Market',
      img: '/assets/pictures/kitchen-market.png',
    };
    const chefRes3: ICard = {
      id: 2,
      lowerTitle: 'Mashya',
      img: '/assets/pictures/mashya.png',
    };
    this.chefsRestaurants.push(chefRes1);
    this.chefsRestaurants.push(chefRes2);
    this.chefsRestaurants.push(chefRes3);
  }

  ngOnInit(): void {}
}
