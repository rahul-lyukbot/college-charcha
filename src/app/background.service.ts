// background.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private backgroundImages: string[] = [
    'url("/assets/img/background1.jpg")',
    'url("/assets/img/background2.jpg")',
    // Add more image URLs as needed
  ];

  private currentBackgroundIndex: number = 0;

  getNextBackground(): string {
    this.currentBackgroundIndex =
      (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
    return this.backgroundImages[this.currentBackgroundIndex];
  }
}
