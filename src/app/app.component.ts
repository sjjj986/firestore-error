import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckingService } from './services/checking/checking.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firebase-mcve';

  constructor(private checkingService: CheckingService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  // Getting a collection of dishes
  getDishes() {
    this.checkingService.getCollection('dishes').subscribe({
      next: (data) => console.log('Collection of dishes:', data),
      error: (err) => console.error('Error fetching dishes:', err),
    });
  }
}
