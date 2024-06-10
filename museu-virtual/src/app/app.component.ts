import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './views/footer/footer.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports:[RouterOutlet,FooterComponent,NavbarComponent]
  
})
export class AppComponent implements OnInit {
  title = 'websitemuseus';
  showFooter: boolean = true;
  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showFooter = this.checkIfFooterShouldBeVisible(event.urlAfterRedirects);
      this.showNavbar = this.checkIfFooterShouldBeVisible(event.urlAfterRedirects);
    });
  }

  checkIfFooterShouldBeVisible(url: string): boolean {
    const noFooterRoutes = ['page-not-found'];
    return !noFooterRoutes.some(route => url.includes(route));
  }
}