import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

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
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
    let returnEmployee: Employee = this.employeeService.validateUser(this.newEmployee);
    if(returnEmployee.email == ""){
      //invalid user
      this.errorMessage = "Invalid Input!!!"
    }else{
      //Logged in 
      if(returnEmployee.userName=="admin"){
        //navigate to list-request
        this.router.navigate(['list-reimbursement']) 

      }else{
      //  this.router.navigate(['reimbursement-crud'])

      }
      console.log("Logged in ");
    }
  }

}
