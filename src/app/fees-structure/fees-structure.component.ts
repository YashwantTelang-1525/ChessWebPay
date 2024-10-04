import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fees-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fees-structure.component.html',
  styleUrls: ['./fees-structure.component.css']
})
export class FeesStructureComponent implements OnInit {
  showBeginnerContent = true;
  showIntermediateContent = true;
  showAdvancedContent = true;
  paymentStatusMessage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const paymentStatus = params['paymentStatus'];
      const level = params['level'];
      if (paymentStatus === 'success') {
        this.paymentStatusMessage = `Payment for ${level} level was successful.`;
      } else if (paymentStatus === 'cancel') {
        this.paymentStatusMessage = `Payment for ${level} level was cancelled.`;
      }
    });
  }

  toggleBeginnerContent() {
    this.showBeginnerContent = !this.showBeginnerContent;
  }

  toggleIntermediateContent() {
    this.showIntermediateContent = !this.showIntermediateContent;
  }

  toggleAdvancedContent() {
    this.showAdvancedContent = !this.showAdvancedContent;
  }

  // Payment method to open Razorpay checkout
  openPayment(level: string, amount: number) {
    const razorpayOptions = {
      "key": "rzp_live_zDlAIrO4DM4G09", // Replace with your Razorpay Key ID
      "amount": amount * 100, // Razorpay expects the amount in paise
      "currency": "INR",
      "name": "Chess Academy", // Replace with your business name
      "description": `Payment for ${level} Course`,
      "image": "https://example.com/your_logo", // Your logo URL
      "order_id": "", // You may generate the order_id from the backend
      "handler": (response: any) => {
        // This function is called after successful payment
        alert('Payment Successful!');
        console.log(response);
        this.paymentStatusMessage = `Payment for ${level} was successful. Payment ID: ${response.razorpay_payment_id}`;
        // You may redirect or save the payment info
      },
      "prefill": {
        "name": "Your User", // Prefill customer's details if available
        "email": "user@example.com",
        "contact": "9999999999"
      },
      "notes": {
        "address": "Chess Academy Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    const rzp1 = new (window as any).Razorpay(razorpayOptions);

    rzp1.on('payment.failed', (response: any) => {
      alert('Payment Failed');
      console.error(response.error);
      this.paymentStatusMessage = `Payment for ${level} failed. Reason: ${response.error.description}`;
    });

    rzp1.open();
  }
}
