import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Request } from './request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  allRequests: Request[] = [
    {
    requestId: 1,
    dateSubmitted: new Date,
    dateOfTransaction: new Date,
    employeeId: 0,
    expenseType: "Lodging",
    amount: 500,
    status: "pending",
    dateResolved: new Date,
    merchantName: "Expedia"
  },
  {
    requestId: 2,
    dateSubmitted: new Date,
    dateOfTransaction: new Date,
    employeeId: 0,
    expenseType: "Food",
    amount: 50,
    status: "pending",
    dateResolved: new Date,
    merchantName: "Subway"
  },
  {
    requestId: 3,
    dateSubmitted: new Date,
    dateOfTransaction: new Date,
    employeeId: 0,
    expenseType: "Lodging",
    amount: 250,
    status: "pending",
    dateResolved: new Date,
    merchantName: "Expedia"
  }
 

  ];

  constructor() { }

  fetchAllRequests(): Request[]{
    return this.allRequests;
  }

  deleteRequest(requestId: number): Request[]{
    console.log(requestId);
    for (let i = 0; i<this.allRequests.length; i++){
      if(this.allRequests[i].requestId == requestId){
        this.allRequests.splice(i,1);
        break;
      }
    }
    return this.allRequests
  }

  addRequest(requestModel: Request): Request{
    let newRequestId: number = this.allRequests[this.allRequests.length-1].requestId + 1; 
    requestModel.requestId = newRequestId;
    this.allRequests.push(requestModel);
    return requestModel;

  }

  updateRequest(requestModel: Request): Request{
   
    for (let i = 0; i<this.allRequests.length; i++){
      if(this.allRequests[i].requestId == requestModel.requestId){
        this.allRequests[i]= requestModel;
        break;
      }
    }
    return requestModel;
  }

  fetchARequest(requestId: number): Request{
 
    for (let i = 0; i<this.allRequests.length; i++){
      if(this.allRequests[i].requestId == requestId){
        return this.allRequests[i];
      }
    }
    return {
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
  }

}

