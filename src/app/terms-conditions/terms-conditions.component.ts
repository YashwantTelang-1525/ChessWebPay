import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements AfterViewInit {

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
    // Handle accept action (e.g., set a cookie, store in local storage, etc.)
    console.log('Terms accepted');
    // Hide the modal
    const modalElement = document.getElementById('termsModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }

  decline() {
    // Handle decline action (e.g., redirect to another page, show a message, etc.)
    console.log('Terms declined');
    // Redirect to another page
    window.location.href = 'https://www.example.com';
  }
}
