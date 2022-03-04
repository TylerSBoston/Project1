import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //stores and retrieves user info from the browser storage
  // track login and logout

  constructor() { }

  loggedIn: boolean = false;

  storeUser(user: User): void{
    sessionStorage.setItem("userInfo", JSON.stringify(user));

  }

  retrieveUser(): User{
    let data: any = sessionStorage.getItem("userInfo");
    return JSON.parse(data);


  }

  destroyUser(): void {
    sessionStorage.removeItem("userInfo");
  }
    

}
