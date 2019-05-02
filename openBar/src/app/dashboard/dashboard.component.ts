import { Component, OnInit } from '@angular/core';
import { OpenbarService } from '../openbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.openBarService.setIsConnected(true);
  }
}
