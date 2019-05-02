import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  burgers: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getBurgers();
    this.openBarService.setIsConnected(true);
  }

  getBurgers(): void {
    this.openBarService.getBurgers().subscribe(burgers => this.burgers = burgers);
  }
}
