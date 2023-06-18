import { Component, HostListener } from '@angular/core';
import { User, users } from 'src/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User | undefined
  windowHeight: string = '100vh'; // Hauteur initiale de la section
  listHeight: string = ''

  ngOnInit(){
    this.updateWindowHeight();
  }

  onUserSelected(user: User) {
    this.currentUser = user;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateWindowHeight();
  }

  updateWindowHeight() {
    const windowHeight = `${window.innerHeight-70}px`;
    this.windowHeight = windowHeight;
    this.listHeight = `${window.innerHeight-170}px`;
  }
}
