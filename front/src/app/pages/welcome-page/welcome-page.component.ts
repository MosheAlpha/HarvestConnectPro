import { Component } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
  constructor(private dataService: UtilsService) {}

  getVolAmount(): any {
    return this.dataService
      .getVolAmount()
      .subscribe((amount: number) => amount);
  }

  getSoldiersAmount(): any {
    return this.dataService
      .getSoldiersAmount()
      .subscribe((amount: number) => amount);
  }

  getPeopleAmount(): any {
    return this.dataService
      .getPeopleAmount()
      .subscribe((amount: number) => amount);
  }
}
