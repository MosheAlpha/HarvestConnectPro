import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() events: any;

  ngOnInit(): void {
    
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
