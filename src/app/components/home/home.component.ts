import { Component } from '@angular/core';
import { User, users } from 'src/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User | undefined
  
  onUserSelected(user: User) {
    this.currentUser = user;
  }
}
