import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { ICard } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class DishesService {
  constructor(private http: HttpClient) {}

  getSignatureDishes(): Observable<ICard[]> {
    return this.http.get(`${environment.url}/dishes/signature-dishes`).pipe(
      map((data: any) => {
        const restaurantsData: any[] = data.restaurants;
        const restaurants: ICard[] = [];
        restaurantsData.forEach((restaurant: any) => {
          const dish: any = restaurant.signatureDish;
          if (dish !== null) {
            const sigDish: ICard = {
              id: dish._id,
              lowerTitle: dish.name,
              upperTitle: restaurant.name,
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
