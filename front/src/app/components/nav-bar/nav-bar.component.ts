import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private el: ElementRef) { }

  ngOnInit() { }

  scrollToContact(location: string) {    
    const contactSection = document.getElementById(location);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
