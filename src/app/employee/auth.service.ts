import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //await spam, see if that fixes things
  loggedIn: boolean = false;

  loggedInPermissions = new Map();

  async storeEmployee(employee: Employee){
    await sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
    this.loggedIn = true;
  }

  async retrieveEmployee(): Promise<Employee>{
    let data: any = await sessionStorage.getItem("employeeInfo");
    this.loggedIn = true;
    return JSON.parse(data);
    

  }

  async destroyEmployee(){
    await sessionStorage.removeItem("userInfo");
    this.loggedIn =await false;
    await this.loggedInPermissions.clear();
  }
}
