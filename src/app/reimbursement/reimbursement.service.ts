import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  
  allReimbursements: Reimbursement[] = [
    {
    reimbursementID: 1,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "Lodging",
    amount: 500,
    status: "pending",
    dateUpdated: "",
    merchant: "Expedia",
    statusID: 0,
    details: "",
    currentComment: "",
    employee: ""

  },
  {
    reimbursementID: 2,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "Food",
    amount: 50,
    status: "pending",
    dateUpdated: "",
    merchant: "Subway",
    statusID: 0,

    details: "",
    currentComment: "",
    employee: ""
  },
  {
    reimbursementID: 3,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "Lodging",
    amount: 250,
    status: "pending",
    dateUpdated: "",
    merchant: "Expedia",
    statusID: 0,

    details: "",
    currentComment: "",
    employee: ""
  }
 

  ];

  constructor() { }

  fetchAllReimbursements(): Reimbursement[]{
    return this.allReimbursements;
  }

  deleteReimbursement(reimbursementID: number): Reimbursement[]{
    console.log(reimbursementID);
    for (let i = 0; i<this.allReimbursements.length; i++){
      if(this.allReimbursements[i].reimbursementID == reimbursementID){
        this.allReimbursements.splice(i,1);
        break;
      }
    }
    return this.allReimbursements
  }

  addReimbursement(reimbursementModel: Reimbursement): Reimbursement{
    let newReimbursementID: number = this.allReimbursements[this.allReimbursements.length-1].reimbursementID + 1; 
    reimbursementModel.reimbursementID = newReimbursementID;
    this.allReimbursements.push(reimbursementModel);
    return reimbursementModel;

  }

  updateReimbursement(reimbursementModel: Reimbursement):  Reimbursement{
   
    for (let i = 0; i<this.allReimbursements.length; i++){
      if(this.allReimbursements[i].reimbursementID == reimbursementModel.reimbursementID){
        this.allReimbursements[i]= reimbursementModel;
        break;
      }
    }
    return reimbursementModel;
  }

  fetchAReimbursement(reimbursementID: number): Reimbursement{
 
    for (let i = 0; i<this.allReimbursements.length; i++){
      if(this.allReimbursements[i].reimbursementID == reimbursementID){
        return this.allReimbursements[i];
      }
    }
    return {
      reimbursementID: 0,
      dateSubmitted: "",
      dateOfTransaction: "",
      employeeID: 0,
      expenseType: "Lodging",
      amount: 250,
      status: "pending",
      dateUpdated: "",
      merchant: "Expedia",
      statusID: 0,
  
      details: "",
      currentComment: "",
      employee: ""
    };
  }

}