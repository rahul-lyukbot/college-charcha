import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  background!: string;

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.background = this.backgroundService.getNextBackground();

    // Automatically change background every 5 seconds (5000 milliseconds)
    setInterval(() => {
      this.background = this.backgroundService.getNextBackground();
    }, 5000);
  }
}
