import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //await spam, see if that fixes things
  loggedIn: boolean = false;

  loggedInPermissions = new Map();

  async storeEmployee(employee: Employee){
    await sessionStorage.setItem("employeeInfo", await JSON.stringify(employee));
    this.loggedIn = await true;
  }
  

  async retrieveEmployee(): Promise<Employee>{
    let data: any = await sessionStorage.getItem("employeeInfo");
    this.loggedIn = await true;
    return await JSON.parse(await data);
    

  }

  async destroyEmployee(){
    sessionStorage.clear();
    this.loggedIn = await false;
    await this.loggedInPermissions.clear();
    
  }
}
