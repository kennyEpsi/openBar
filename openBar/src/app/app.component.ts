import { Component, OnInit } from '@angular/core';
import { OpenbarService } from './openbar.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public constructor(private openBarService: OpenbarService) {
  }

  ngOnInit() {
  }

  openNav() {
    this.openBarService.openNav();
  }

  closeNav() {
    this.openBarService.closeNav();
  }

  logOut() {
    this.openBarService.setIsConnected(false);
  }
}
