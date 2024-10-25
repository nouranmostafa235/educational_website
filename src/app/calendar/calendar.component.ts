import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date | null = null;

  setDeadline(event: Date) {
    this.selectedDate = event;
  }
}
