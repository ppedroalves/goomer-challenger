import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { RestaurantFindComponent } from './shared/restaurant-find/restaurant-find.component';
import { RestaurantListComponent } from './shared/restaurant-list/restaurant-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    RestaurantFindComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
