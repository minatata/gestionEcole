import { Injectable } from '@angular/core';
import { Observable, delay, of, tap, throwError } from 'rxjs';
import { User } from './login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  users:User[]=[];
  authenticateUser!:User;
  constructor(){
    this.users.push({id: "1",username:"user1",password:"pass",roles:["user"]});
    this.users.push({id:"2",username:"user2",password:"pass2",roles:["user"]});
    this.users.push({id:"3",username:"admin",password:"pas",roles:["user","admin"]});
  }

 
  public login(username:String,password:String):Observable<User>{
   let use=this.users.find(u=>u.username!==username);
    if(!use)return throwError(()=>new Error("user not found"));
    if (use.password!=password){
      return throwError(()=>new Error("mot de pass incorrect"))
    }
      return of(use);
    

  }
 public authenticaUser(user:User):Observable<boolean>{
    this.authenticateUser=user;
    localStorage.setItem("authUser",JSON.stringify({username:user.username,roles:user.roles,jwt:"JWT_TOKEN"}))
    return of(true);
  }

 public hasRole(role:string){
    return this.authenticateUser!.roles.includes(role)
  }
  public isAuthenticate(){
    return this.authenticateUser!=undefined;
  }
}


