import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ecole';
  public showHideSideBar:boolean=false;
  LoggedIn: boolean = false;
  //showHideSideBar:boolean=false;
 // ShowHideSideBar:boolean;
 // onShowHideSideBar(ShowHideSideBar:){
//    this.ShowHideSideBar=ShowHideSideBar;
  // };
  constructor(private loginService:AuthentificationService) { }

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
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
  //  return !(user === null)
    return true;
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}
