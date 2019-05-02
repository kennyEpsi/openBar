import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'
import { OpenbarService } from '../openbar.service'

@Component({
  selector: 'app-viande',
  templateUrl: './viande.component.html',
  styleUrls: ['./viande.component.css']
})
export class ViandeComponent implements OnInit {

  viandes: Menu[];

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.getViandes();
  }

  getViandes(): void {
    this.viandes = this.openBarService.getViandes();
  }
}
