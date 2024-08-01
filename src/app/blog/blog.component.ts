import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  

  showContent: boolean = true;
  showContent2: boolean = true;
  showContent3: boolean = true;


  toggleContent() {
    this.showContent = !this.showContent;
    console.log('Content toggled, showContent:', this.showContent);
  }

  toggleContent2(){
    this.showContent2 = !this.showContent2;
  }

  toggleContent3(){
    this.showContent3 = !this.showContent3;
  }
}
