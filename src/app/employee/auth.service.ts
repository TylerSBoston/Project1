import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  loggedInPermissions = new Map();

  storeEmployee(employee: Employee): void{
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
    this.loggedIn = true;
  }

  retrieveEmployee(): Employee{
    let data: any = sessionStorage.getItem("employeeInfo");
    this.loggedIn = true;
    return JSON.parse(data);
    

  }

  destroyEmployee(): void {
    sessionStorage.removeItem("userInfo");
    this.loggedIn = false;
    this.loggedInPermissions.clear();
  }
}
