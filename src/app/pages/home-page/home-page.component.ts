import { Component, OnInit } from '@angular/core';

import { ICard } from 'src/app/models/card.model';
import { IChefOfTheWeek } from 'src/app/models/chefOfTheWeek.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  popRestaurants: ICard[] = [];
  signatureDishes: ICard[] = [];
  chefsRestaurants: ICard[] = [];
  chefOfTheWeek: IChefOfTheWeek = {
    name: '',
    image: '',
    description: '',
    id: '',
  };
  icons: { img: string; content: string }[] = [];
  screenWidth: number = 0;

  constructor(private dataService: DataService) {
    this.dataService.getChefOfTheWeek().subscribe((chef) => {
      this.chefOfTheWeek = chef;
    });
    this.dataService.getPopularRestaurant().subscribe((popularRestaurants) => {
      this.popRestaurants = popularRestaurants;
    });
    this.dataService
      .getChefsRestaurants(this.chefOfTheWeek.id)
      .subscribe((chefsRestaurants) => {
        this.chefsRestaurants = chefsRestaurants;
      });
    this.dataService.getSignatureDishes().subscribe((signatureDishes) => {
      this.signatureDishes = signatureDishes;
    });

    this.screenWidth = window.innerWidth;
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

    // const chefRes1: ICard = {
    //   id: 0,
    //   lowerTitle: 'Onza',
    //   img: '/assets/pictures/onza.png',
    // };
    // const chefRes2: ICard = {
    //   id: 1,
    //   lowerTitle: 'Kitchen Market',
    //   img: '/assets/pictures/kitchen-market.png',
    // };
    // const chefRes3: ICard = {
    //   id: 2,
    //   lowerTitle: 'Mashya',
    //   img: '/assets/pictures/mashya.png',
    // };
    // this.chefsRestaurants.push(chefRes1);
    // this.chefsRestaurants.push(chefRes2);
    // this.chefsRestaurants.push(chefRes3);
    // this.chefsRestaurants.push(chefRes3);
    // this.chefsRestaurants.push(chefRes3);
    // this.chefsRestaurants.push(chefRes3);
  }

  ngOnInit(): void {}
}
