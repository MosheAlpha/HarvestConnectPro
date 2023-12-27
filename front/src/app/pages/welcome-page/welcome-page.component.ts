import { Component } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
  soldierAmount: number = 100;
  peopleAmount: number = 100;
  volAmount: number = 100;
  constructor(private dataService: UtilsService) {}

  ngOnInit() {
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
}
