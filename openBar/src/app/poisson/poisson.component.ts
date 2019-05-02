import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.component.html',
  styleUrls: ['./poisson.component.css']
})
export class PoissonComponent implements OnInit {

  poissons: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getPoissons();
  }

  getPoissons(): void {
    this.poissons = this.openBarService.getPoissons();
  }
}
