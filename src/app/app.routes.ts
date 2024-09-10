import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';
import { FeesStructureComponent } from './fees-structure/fees-structure.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { DeclineComponent } from './decline/decline.component';
import { termsGuard } from './terms.gurad';
import { ChessboardComponent } from './chessboard/chessboard.component';

export const routes: Routes = [
  { path: '', component: CarouselComponent, canActivate: [termsGuard] },
  { path: 'courses', component: BlogComponent, canActivate: [termsGuard] },
  { path: 'fees', component: FeesStructureComponent, canActivate: [termsGuard] },
  { path: 'about', component: HeroComponent, canActivate: [termsGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [termsGuard] },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'decline', component: DeclineComponent },
  { path: 'chessboard', component: ChessboardComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
