import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  isSignIn = true
  username = ''
  password = ''
  confirmPassword = ''


  login(){
    if(this.username != '' && this.password != ''){
      this.userService.login(this.username,this.password).subscribe(
        response=>{
          localStorage.setItem('token', response.body['access']);
          this.router.navigate(['/']);
        }
      )
    }else{
      window.alert("username or password can't be empty!")
    }
  }

  register(){
    if(this.username != '' && this.password != '' && this.password === this.confirmPassword){
      this.userService.store(this.username,this.password).subscribe(
        response=>{
          localStorage.setItem('token', response.body['access']);
          this.router.navigate(['/']);
        }
      )
    }else{
      window.alert("username can't be empty or password is not conform")
    }
  }
}
