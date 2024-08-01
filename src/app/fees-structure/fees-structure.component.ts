import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  isPaymentModalVisible = false;
  paymentLevel = '';
  paymentStatusMessage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const paymentStatus = params['paymentStatus'];
      const level = params['level'];
      if (paymentStatus === 'success') {
        this.paymentStatusMessage = `Payment for ${level} level was successful.`;
        // Here you can generate and display the receipt
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

  openPaymentLink(level: string) {
    let paymentLink = '';
    switch(level) {
      case 'BEGINNER':
        paymentLink = 'https://payments-test.cashfree.com/forms/beginnersfee'; // replace with your link
        break;
      case 'INTERMEDIATE':
        paymentLink = 'https://payments-test.cashfree.com/forms/intermediatefee'; // replace with your link
        break;
      case 'ADVANCED':
        paymentLink = 'https://payments-test.cashfree.com/forms/advancefees'; // replace with your link
        break;
    }
    window.open(paymentLink, '_blank');
  }
}
