import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User | undefined
  windowHeight: string = '100vh'; // Hauteur initiale de la section
  listHeight: string = ''
  user: User | undefined 

  constructor(
    private router: Router,
    private userService: UserService
    ){  
    if(!localStorage.getItem('token'))
      router.navigate(['/login']);
  }

  ngOnInit(){
    this.updateWindowHeight();
    this.userService.get().subscribe(
      data=>{
        this.user = data
      }
    )
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
