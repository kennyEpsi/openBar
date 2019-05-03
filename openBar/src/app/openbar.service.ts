import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from './menu';
import { SALADES } from './mock/mock-salade';
import { VIANDES } from './mock/mock-viande';
import { POISSONS } from './mock/mock-poisson';
import { BURGERS } from './mock/mock-burger';
import { PIZZAS } from './mock/mock-pizza';
import { SOFT_DRINK } from './mock/mock-boisson';
import { ALCOHOL_DRINK } from './mock/mock-boisson';
import { COCKTAIL_DRINK } from './mock/mock-boisson';

@Injectable({
  providedIn: 'root'
})
export class OpenbarService {

  isConnected = false;

  constructor() { }

  getSalades(): Observable<Menu[]> {
    return of(SALADES);
  }

  getViandes(): Observable<Menu[]> {
    return of(VIANDES);
  }

  getPoissons(): Observable<Menu[]> {
    return of(POISSONS);
  }

  getBurgers(): Observable<Menu[]> {
    return of(BURGERS);
  }

  getPizzas(): Observable<Menu[]> {
    return of(PIZZAS);
  }

  getSoftDrink(): Observable<Menu[]> {
    return of(SOFT_DRINK);
  }

  getAlcoholDrink(): Observable<Menu[]> {
    return of(ALCOHOL_DRINK);
  }

  getCocktailDrink(): Observable<Menu[]> {
    return of(COCKTAIL_DRINK);
  }

  setIsConnected(value) {
    this.isConnected = value;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }

}
