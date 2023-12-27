import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestdeal-event',
  templateUrl: './bestdeal-event.component.html',
  styleUrls: ['./bestdeal-event.component.scss']
})
export class BestdealEventComponent implements OnInit {

  @Input() events: any;

  ngOnInit(): void {
    
  }

}
