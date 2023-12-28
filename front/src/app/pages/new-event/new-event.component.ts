import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
})
export class NewEventComponent {
  eventForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    public snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      type: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      amountPeopleRequired: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      eventData.amountPeopleLeft = eventData.amountPeopleRequired;

      this.eventService.createEvent(eventData).subscribe((response) => {
        if (response) {
          // this.snackbarService.showSnackbar(
          //   'איורע נוצר בהצלחה!',
          //   'snackbar-success '
          // );
          this.router.navigate(['/home']);
        }

        // You can handle successful creation, such as navigating to another page
      });
    } else {
      this.snackbarService.showSnackbar('טופס לא תקין', 'snackbar-error');
    }
  }
}
