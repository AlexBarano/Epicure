import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefsPageComponent } from './pages/chefs-page/chefs-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'chefs', component: ChefsPageComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
