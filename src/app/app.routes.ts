import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';
import { FeesStructureComponent } from './fees-structure/fees-structure.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"", component:CarouselComponent},
    {path:"courses", component:BlogComponent},
    {path:"fees", component:FeesStructureComponent},
    {path:"about", component:HeroComponent},
    {path:"contact", component:ContactComponent}

];
