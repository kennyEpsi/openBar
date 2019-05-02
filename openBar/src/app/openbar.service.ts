import { Injectable } from '@angular/core';
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

  getSalades(): Menu[] {
    return SALADES;
  }

  getViandes(): Menu[] {
    return VIANDES;
  }

  getPoissons(): Menu[] {
    return POISSONS;
  }

  getBurgers(): Menu[] {
    return BURGERS;
  }

  getPizzas(): Menu[] {
    return PIZZAS;
  }

  getBoissons(): Menu[] {
    return BOISSONS;
  }

  getIsConnected(): boolean {
    return this.isConnected;
  }

  setIsConnected(value) {
    this.isConnected = value;
  }

}
