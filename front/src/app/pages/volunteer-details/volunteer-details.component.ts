import { Component } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss'],
})
export class VolunteerDetailsComponent {
  events: any = [];
  event: any = [];

  volunteerHarvestLevels: any = {
    easy: 'הצטרף לגן קהילתי לביצור משימות קטנות בקטיף.',
    medium: 'השתתף בעזרת משימות קטיף בחווה קטנה עם אחריות בינונית.',
    hard: 'השתלבות בקטיף אינטנסיבי בפרויקט חקלאי גדול יותר.',
  };

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route parameters
    const productId = this.route.snapshot.paramMap.get('id');

    // Fetch product details from the backend
    this.eventService.getEvent(productId).subscribe((data) => {
      this.event = data;
      console.log(data);
    });

    this.eventService.getEvents().subscribe((data) => {
      this.events = data.results;
      console.log(data);
    });
  }

  getColor(difficulty: string): string {
    switch (difficulty) {
      case 'קל':
        return '#cffbd4';
      case 'ממוצע':
        return '#fbf6cf';
      case 'קשה':
        return '#fbd9cf';
      default:
        return ''; // You can provide a default color or handle it as needed
    }
  }
}
