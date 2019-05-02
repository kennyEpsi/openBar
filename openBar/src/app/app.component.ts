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
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }

  isShowSideNav() {
    return this.openBarService.getIsConnected();
  }
}
