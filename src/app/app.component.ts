import { Component } from '@angular/core';
import { ROUTES, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeesStructureComponent } from './fees-structure/fees-structure.component';
import { EmailfunctionComponent } from './emailfunction/emailfunction.component';
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { ChessboardComponent } from './chessboard/chessboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BlogComponent, CarouselComponent,
    HeroComponent, HeaderComponent, RouterModule, ContactComponent, FooterComponent, ReactiveFormsModule,
    FeesStructureComponent, EmailfunctionComponent, TermsConditionsComponent, ChessboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'chessWeb';
}
