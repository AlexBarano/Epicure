import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, firstValueFrom } from 'rxjs';

import { ICard } from '../models/card.model';
import { IChefOfTheWeek } from '../models/chefOfTheWeek.model';

@Injectable({ providedIn: 'root' })
export class ChefsService {
  constructor(private http: HttpClient) {}

  getChefOfTheWeek(): Observable<IChefOfTheWeek> {
    const chefOfTheWeek = this.http
      .get(`http://localhost:3500/api/v1/chefs/chef-of-the-week`)
      .pipe(
        map((chefData: any) => {
          const chef: IChefOfTheWeek = {
            name: chefData.chef.name,
            description: chefData.chef.description,
            image: chefData.chef.image,
            id: chefData.chef._id,
          };
          this.getChefsRestaurants(chef.id);
          return chef;
        })
      );
    return chefOfTheWeek;
  }

  getChefsRestaurants(chefId: string): Observable<ICard[]> {
    const chefsRestaurants = this.http
      .get(`http://localhost:3500/api/v1/chefs/restaurants/${chefId}`)
      .pipe(
        map((data: any) => {
          const restaurants: ICard[] = [];
          const restaurantsData: any[] = data.restaurants;
          restaurantsData.forEach((res: any) => {
            const restaurant: ICard = {
              id: res._id,
              lowerTitle: res.name,
              description: res.description,
              img: res.image,
            };
            restaurants.push(restaurant);
          });
          return restaurants;
        })
      );
    return chefsRestaurants;
  }
}
