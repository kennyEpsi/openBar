import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  boissons: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getBoissons();
  }

  getBoissons(): void {
    this.openBarService.getBoissons().subscribe(boissons => this.boissons = boissons);
  }
}
