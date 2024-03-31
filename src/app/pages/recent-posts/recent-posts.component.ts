import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css',
  imports: [MatCardModule, MatButtonModule],
})
export class RecentPostsComponent {

}
