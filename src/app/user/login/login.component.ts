import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = {
    id: 0,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    role: ''
  }

  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
    let returnUser: User = this.userService.validateUser(this.newUser);
    if(returnUser.email == ""){
      //invalid user
      this.errorMessage = "Invalid Input!!!"
    }else{
      //Logged in 
      if(returnUser.role=="admin"){
        //navigate to list-request
        this.router.navigate(['list-request']) 

      }else{
        this.router.navigate(['request-crud'])

      }
      console.log("Logged in ");
    }
  }

}
