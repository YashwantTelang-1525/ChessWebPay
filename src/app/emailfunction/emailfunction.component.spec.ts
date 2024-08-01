import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailfunctionComponent } from './emailfunction.component';

describe('EmailfunctionComponent', () => {
  let component: EmailfunctionComponent;
  let fixture: ComponentFixture<EmailfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailfunctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
