import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newEmployee: Employee = {
    employeeID: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    phone: '',
    fullName: '',
    jobTitle: '',
    roles: []
  }

  errorMessage: string = "";
  constructor(private employeeHttpService: EmployeeHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  async validateUser(){
    let returnEmployee: Employee  = await this.employeeHttpService.validateLogin(this.newEmployee);
    if(returnEmployee.fullName == ""){
      //invalid user
      this.errorMessage =await "Invalid Input!!!"
      
    }else{
      //Logged in 
      this.errorMessage =await "";
      await this.router.navigate(['managerView']);
      console.log("Logged in ");
    }
  }

}
