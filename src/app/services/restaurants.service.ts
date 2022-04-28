import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { ICard } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getPopularRestaurant(): Observable<ICard[]> {
    return this.http
      .get(`${environment.url}/restaurants/popular-restaurants`)
      .pipe(
        map((restaurantsData: any) => {
          const popularRestaurants: any[] = restaurantsData.popularRestaurants;
          return popularRestaurants;
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
