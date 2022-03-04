import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request.model';
import { RequestService } from '../request.service';



@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  allRequests: Request[] = [];

  toggleAdd: boolean = false;

  newRequest: Request = {
    requestId: 0,
    dateSubmitted: new Date,
    dateOfTransaction: new Date,
    employeeId: 0,
    expenseType: "",
    amount: 0,
    status: "",
    dateResolved: new Date,
    merchantName: ""
  };





  constructor(private requestService: RequestService, private router: Router) {
  }

  oneRequest: Request = {
    requestId: 1,
    dateSubmitted: new Date,
    dateOfTransaction: new Date,
    employeeId: 0,
    expenseType: "Lodging",
    amount: 50,
    status: "pending",
    dateResolved: new Date,
    merchantName: "Expedia"
  };





  ngOnInit(): void {
    this.allRequests = this.requestService.fetchAllRequests();
  }



  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    }
    else {
      this.toggleAdd = true;
    }
  }
  // route to editbookcomponent, inject router into the constructor in order to use  this.router.navigate
  goToEditRequest(requestId: number) {
    this.router.navigate(['edit-request', requestId]);
  }




  deleteRequest(requestId: number) {
    this.allRequests = this.requestService.deleteRequest(requestId);
  }

  addRequest() {
    let addNewRequest: Request = {
      requestId: 0,
      dateSubmitted: this.newRequest.dateSubmitted,
      dateOfTransaction: this.newRequest.dateOfTransaction,
      employeeId: this.newRequest.employeeId,
      expenseType: this.newRequest.expenseType,
      amount: this.newRequest.amount,
      status: this.newRequest.status,
      dateResolved: this.newRequest.dateResolved,
      merchantName: this.newRequest.merchantName
    };
    this.requestService.addRequest(addNewRequest);
    this.allRequests = this.requestService.fetchAllRequests();
  }



}
