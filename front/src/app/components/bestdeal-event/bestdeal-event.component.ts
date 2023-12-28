import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestdeal-event',
  templateUrl: './bestdeal-event.component.html',
  styleUrls: ['./bestdeal-event.component.scss'],
})
export class BestdealEventComponent implements OnChanges {
  @Input() events: any = [];
  easy: any = {};
  medium: any = {};
  hard: any = {};

  volunteerHarvestLevels = {
    easy: {
      title: 'רמת קטיף קלה',
      description: 'הצטרף לגן קהילתי לביצור משימות קטנות בקטיף.',
    },
    medium: {
      title: 'רמת קטיף בינונית',
      description: 'השתתף בעזרת משימות קטיף בחווה קטנה עם אחריות בינונית.',
    },
    hard: {
      title: 'רמת קטיף קשה',
      description: 'השתלבות בקטיף אינטנסיבי בפרויקט חקלאי גדול יותר.',
    },
  };

  ngOnChanges(changes: any) {
    if (
      changes &&
      changes.events &&
      changes.events.currentValue.length > 0 &&
      changes.events.currentValue !== changes.events.previousValue
    ) {
      this.easy = this.events[3];
      this.medium = this.events[5];
      this.hard = this.events[0];
    }
  }
}
