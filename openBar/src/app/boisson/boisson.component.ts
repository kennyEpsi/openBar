import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  soft_drink: Menu[];
  alcohol_drink: Menu[];
  cocktail_drink: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getSoftDrink();
    this.getAlcoholDrink();
    this.getCocktailDrink();
    this.openBarService.setIsConnected(true);
  }

  getSoftDrink(): void {
    this.openBarService.getSoftDrink().subscribe(soft_drink => this.soft_drink = soft_drink);
  }

  getAlcoholDrink(){
    this.openBarService.getAlcoholDrink().subscribe(alcohol_drink => this.alcohol_drink = alcohol_drink);
  }

  getCocktailDrink(){
    this.openBarService.getCocktailDrink().subscribe(cocktail_drink => this.cocktail_drink = cocktail_drink);
  }
}
