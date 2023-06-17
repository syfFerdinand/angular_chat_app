import { Component } from '@angular/core';
import { users } from 'src/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users = [...users]
}
