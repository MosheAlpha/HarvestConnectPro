import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  events: any = [];

  constructor(
    private eventService: EventService,
    private router: Router,
    private dataService: UtilsService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events.results;
      console.log(this.events);
    });
  }

  soldierAmount: number = 15000;
  peopleAmount: number = 27000;
  volAmount: number = 75;
  // this.dataService
  //   .getVolAmount()
  //   .subscribe((amount: number) => (this.volAmount = amount));

  // this.dataService
  //   .getSoldiersAmount()
  //   .subscribe((amount: number) => (this.soldierAmount = amount));

  // this.dataService
  //   .getPeopleAmount()
  //   .subscribe((amount: number) => (this.peopleAmount = amount));
}
