import {Component, input} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-notification',
  imports: [
    MatProgressBar
  ],
  templateUrl: './notification.component.html',
  standalone: true,
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  message: string = "";
  type: number = 1
  progressValue: number = 0;

  constructor() {

  }
}
