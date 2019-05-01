import { Component, OnInit } from '@angular/core';
import { MENUS } from '../mock-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menus = MENUS;

  constructor() { }

  ngOnInit() {
  }

}
