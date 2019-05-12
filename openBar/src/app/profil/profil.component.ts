import { Component, OnInit } from '@angular/core';
import { OpenbarService } from '../openbar.service';
import { NotifierService } from 'angular-notifier';
import { GaugeChartModule } from 'angular-gauge-chart'


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public options = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1000,
    arcColors: ['lightblue', 'lightgray'],
    arcDelimiters: [75],
    rangeLabel: ['0€', '200€'],
    needleStartValue: 0,
  }

  public options2 = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1000,
    arcColors: ['lightblue', 'lightgray'],
    arcDelimiters: [50],
    rangeLabel: ['0€', '3000€'],
    needleStartValue: 0,
  }
  constructor(
    private openBarService: OpenbarService,
    private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.openBarService.setIsConnected(true);
  }

  saveChange() {
    this.notifier.notify('success', 'Changes saved successfully');
  }
}
