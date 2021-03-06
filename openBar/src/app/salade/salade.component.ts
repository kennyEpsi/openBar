import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-salade',
  templateUrl: './salade.component.html',
  styleUrls: ['./salade.component.css']
})
export class SaladeComponent implements OnInit {

  salades: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getSalades();
  }

  getSalades(): void {
    this.salades = this.openBarService.getSalades();
  }

}
