import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  storeEmployee(employee: Employee): void{
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
    this.loggedIn = true;
  }

  retrieveEmployee(): Employee{
    let data: any = sessionStorage.getItem("employeeInfo");
    return JSON.parse(data);
    this.loggedIn = true;

  }

  destroyEmployee(): void {
    sessionStorage.removeItem("userInfo");
    this.loggedIn = false;
  }
}
