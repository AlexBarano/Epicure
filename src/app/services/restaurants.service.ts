import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ICard } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getPopularRestaurant(): Observable<ICard[]> {
    return this.http
      .get('http://localhost:3500/api/v1/restaurants')
      .pipe(
        map((restaurantsData: any) => {
          const allRestaurants: any[] = restaurantsData.restaurants;
          const restaurants: ICard[] = allRestaurants.filter((restaurant) => {
            if (restaurant.isPopular) {
              return restaurant;
            }
          });
          return restaurants;
        })
      )
      .pipe(
        map((restaurantsData: any[]) => {
          const restaurants: ICard[] = [];
          restaurantsData.forEach((restaurant) => {
            const card: ICard = {
              id: restaurant._id,
              lowerTitle: restaurant.name,
              img: restaurant.image,
              description: restaurant.chef.name,
            };
            restaurants.push(card);
          });
          return restaurants;
        })
      );
  }
}
