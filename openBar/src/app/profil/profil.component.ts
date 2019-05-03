import { Component, OnInit } from '@angular/core';
import { OpenbarService } from '../openbar.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private openBarService: OpenbarService) { }

  ngOnInit() {
    this.openBarService.setIsConnected(true);
  }
}
