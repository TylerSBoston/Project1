import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private authService: AuthService) {}

  validateUser(newUser: User): User{
    if(newUser.role=="admin" && newUser.email== "admin" && newUser.password=="admin" ){
      //user has logged in as admin
      //store user info in browser and mark that we have logged in
      this.authService.storeUser(newUser);
      this.authService.loggedIn = true;
      

    }else if(newUser.role=="rep" && newUser.email== "rep" && newUser.password=="rep"){
      // user logged in as rep
      this.authService.storeUser(newUser);
      this.authService.loggedIn = true;
    }else 
      {
      newUser  = {
        id: 0,
        email: "",
        password: "", 
        firstname:  "",
        lastname:  "",
        role: ""
      }
      
    }
    return newUser;
  }
}

    
  

