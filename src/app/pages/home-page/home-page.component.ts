import { Component, OnInit } from '@angular/core';

import { ICard } from 'src/app/models/card.model';
import { IChefOfTheWeek } from 'src/app/models/chefOfTheWeek.model';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  popRestaurants: ICard[] = [];
  signatureDishes: ICard[] = [];
  chefsRestaurants: ICard[] = [];
  chefOfTheWeek!: IChefOfTheWeek;
  icons: { img: string; content: string }[] = [];
  screenWidth: number = 0;

  constructor(
    private chefsService: ChefsService,
    private dishesService: DishesService,
    private restautantsService: RestaurantsService
  ) {
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
  }

  ngOnInit(): void {
    this.chefsService.getChefOfTheWeek().subscribe((chef: IChefOfTheWeek) => {
      this.chefOfTheWeek = chef;
      this.chefsService
        .getChefsRestaurants(this.chefOfTheWeek.id)
        .subscribe((chefsRestaurants: ICard[]) => {
          this.chefsRestaurants = chefsRestaurants;
        });
    });
    this.restautantsService
      .getPopularRestaurant()
      .subscribe((popularRestaurants: ICard[]) => {
        this.popRestaurants = popularRestaurants;
      });

    this.dishesService
      .getSignatureDishes()
      .subscribe((signatureDishes: ICard[]) => {
        this.signatureDishes = signatureDishes;
      });
  }
}
