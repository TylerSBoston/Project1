import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Employee } from './employee.model';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  loggedInEmployee: Employee = {
    employeeID: 0,
    firstName: '',
    lastName: '',
    userName: '',
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    roles: [],
    password: ''
  }

 
  
  loggedInEmployeeRoles = new Map();   
  constructor(private http: HttpClient, private authService: AuthService) { }


  login(employee: Employee): Observable<Employee>{

    //backend technicly uses an update and insert.
    return this.http.post<Employee>("http://localhost:4040//Login",JSON.stringify(employee))
  }

  validateLogin(newEmployee: Employee): Employee{

    this.loggedInEmployeeRoles.clear();
    //feel like I can do this in the login 
    this.login(newEmployee).subscribe((response)=>{
      this.loggedInEmployee = response;
      this.loggedInEmployee.roles.forEach(role => {
        this.loggedInEmployeeRoles.set(role.roleID,role.role)
      });
    });

    if (this.loggedInEmployee.employeeID != 0 ){
      //user has logged in as admin
      //store user info in browser and mark that we have logged in
      this.authService.storeEmployee(newEmployee);
      this.authService.loggedInPermissions = this.loggedInEmployeeRoles;
    }  
    else 
    {
      this.loggedInEmployee = {   
       employeeID: 0,
      firstName: '',
      lastName: '',
      userName: '',
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      roles: [],
      password: ''
      }
      this.authService.destroyEmployee();
    }
    return newEmployee;
  }



}
