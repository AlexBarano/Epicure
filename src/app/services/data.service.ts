import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ICard } from '../models/card.model';
import { IChefOfTheWeek } from '../models/chefOfTheWeek.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getChefOfTheWeek(): Observable<IChefOfTheWeek> {
    return this.http
      .get(`http://localhost:3500/api/v1/chefs/chef-of-the-week`)
      .pipe(
        map((chefData: any) => {
          const chef: IChefOfTheWeek = {
            name: chefData.chef.name,
            description: chefData.chef.description,
            image: chefData.chef.image,
            id: chefData.chef._id,
          };
          return chef;
        })
      );
  }

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

  getChefsRestaurants(chefId: string): Observable<ICard[]> {
    console.log(chefId);
    return this.http
      .get(`http://localhost:3500/api/v1/chefs/restaurants/${chefId}`)
      .pipe(
        map((restaurantsData) => {
          const restaurants: ICard[] = [];
          console.log(restaurantsData);
          return restaurants;
        })
      );
  }

  getSignatureDishes(): Observable<ICard[]> {
    return this.http.get('http://localhost:3500/api/v1/restaurants').pipe(
      map((data: any) => {
        const restaurantsData: any[] = data.restaurants;
        const restaurants: ICard[] = [];
        restaurantsData.forEach((restaurant: any) => {
          if (restaurant.signatureDish) {
            const dish: any = restaurant.signatureDish;
            const sigDish: ICard = {
              id: dish._id,
              lowerTitle: dish.name,
              img: dish.image,
              price: dish.price,
              propertyIcon:
                dish.tags[0] === 'spicy'
                  ? 'assets/icons/spicy-icon.svg'
                  : dish.tags[0] === 'vegan'
                  ? 'assets/icons/vegan-icon.svg'
                  : '',
              description: dish.ingredients.join(', '),
            };
            restaurants.push(sigDish);
          }
        });
        return restaurants;
      })
    );
  }
}
