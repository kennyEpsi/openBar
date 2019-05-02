import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzas: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getPizzas();
    this.openBarService.setIsConnected(true);
  }

  getPizzas(): void {
    this.openBarService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
}
