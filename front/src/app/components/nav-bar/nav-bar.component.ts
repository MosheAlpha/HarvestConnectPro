import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private el: ElementRef, private authService: AuthService) { }

  ngOnInit() { }

  scrollToContact(location: string) {    
    const contactSection = document.getElementById(location);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  isAdmin(): boolean{
    return this.authService.isAdmin();
  }
}
