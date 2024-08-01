import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() level: string = '';
  @Output() close = new EventEmitter<void>();
  stripe: Stripe | null = null;

  async ngOnInit() {
    this.stripe = await loadStripe(environment.stripePublicKey);
  }

  closeModal() {
    this.close.emit();
  }

  async handlePayment() {
    if (!this.stripe) {
      console.error('Stripe has not loaded');
      return;
    }

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level: this.level }),
    });

    const session = await response.json();

    const { error } = await this.stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error.message);
    }
  }
}
