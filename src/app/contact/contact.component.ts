import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{
  sendingContact = false;
  sendingFeedback = false;

  feedbackForm: FormGroup ;
  contactForm: FormGroup ;


  @ViewChild("dialog") dialog: ElementRef|undefined;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      from_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    this.contactForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


  ngAfterViewInit(): void {
    console.log(this.dialog);
  }

   
  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm?.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sendingContact = true;

    emailjs
      .sendForm('service_lq3hc2w', 'template_s50rfs4', e.target as HTMLFormElement, {
        publicKey: 'MSUsbXow5-dIL1Gzc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.sendingContact = false;
          this.dialog?.nativeElement.showModal();
          setTimeout(() => this.dialog?.nativeElement.close(), 2000);
          this.contactForm?.reset(); 
          
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.sendingContact = false;
        },
      );
  }

  public sendFeedback(e: Event){
    e.preventDefault();

    if (this.feedbackForm?.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    this.sendingFeedback = true;

    emailjs
      .sendForm('service_lq3hc2w', 'template_n49ibtc', e.target as HTMLFormElement, {
        publicKey: 'MSUsbXow5-dIL1Gzc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.sendingFeedback = false;
          this.dialog?.nativeElement.showModal();
          setTimeout(() => this.dialog?.nativeElement.close(), 2000);
          this.feedbackForm?.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.sendingFeedback = false;
        },
      );
  }
 
  
}
