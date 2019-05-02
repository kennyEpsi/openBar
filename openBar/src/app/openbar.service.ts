import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from './menu';
import { SALADES } from './mock/mock-salade';
import { VIANDES } from './mock/mock-viande';
import { POISSONS } from './mock/mock-poisson';
import { BURGERS } from './mock/mock-burger';
import { PIZZAS } from './mock/mock-pizza';
import { BOISSONS } from './mock/mock-boisson';

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

  getBoissons(): Observable<Menu[]> {
    return of(BOISSONS);
  }

  getIsConnected(): boolean {
    return this.isConnected;
  }

  setIsConnected(value) {
    this.isConnected = value;
  }

}
