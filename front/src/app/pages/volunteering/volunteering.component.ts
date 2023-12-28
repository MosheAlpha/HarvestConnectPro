import { Component } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent {
  events: any = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events.results;
    });
  }

}
