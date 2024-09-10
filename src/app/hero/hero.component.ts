import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  
  constructor(private router: Router) { }

  navigateToFirstComponent() {
    this.router.navigate(['/']); // Navigate to the root URL (or the URL of your first component)
  }
}
