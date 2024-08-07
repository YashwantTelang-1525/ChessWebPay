import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.showModal();
  }

  showModal() {
    const modalElement = document.getElementById('termsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  showFullTerms(event: Event) {
    event.preventDefault();
    document.getElementById('termsSnippet')!.style.display = 'none';
    document.getElementById('fullTerms')!.style.display = 'block';
  }

  accept() {
    console.log('Terms accepted');
    localStorage.setItem('termsAccepted', 'true');
    const modalElement = document.getElementById('termsModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
    this.router.navigate(['/']);
  }

  decline() {
    console.log('Terms declined');
    this.router.navigate(['/decline']);
  }
}
