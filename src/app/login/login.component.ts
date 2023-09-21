import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = ''; // Propriété username
  password: string = ''; // Propriété password

  invalidLogin = false

  constructor(private router: Router,
    private loginservice:  AuthentificationService ) { }

  ngOnInit() {
  }
  authenticate(username: string, password: string) {
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }  
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
