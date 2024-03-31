import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";
import { FirstComponent } from "./pages/first/first.component";

import { DoctorsComponent } from "./pages/doctors/doctors.component";
import { StatsComponent } from "./pages/stats/stats.component";
import { RecentPostsComponent } from "./pages/recent-posts/recent-posts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, ServiceComponent, FirstComponent, DoctorsComponent, StatsComponent, RecentPostsComponent]
})
export class AppComponent {
  title = 'first-app';
}
