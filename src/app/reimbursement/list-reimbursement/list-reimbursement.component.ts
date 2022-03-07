import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-list-reimbursement',
  templateUrl: './list-reimbursement.component.html',
  styleUrls: ['./list-reimbursement.component.css']
})
export class ListReimbursementComponent implements OnInit {

  allReimbursements: Reimbursement[] = [];

  toggleAdd: boolean = false;

  newReimbursement: Reimbursement = {
    reimbursementID: 0,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "",
    amount: 0,
    status: "",
    dateUpdated: "",
    merchant: "",
    statusID: 0,

    details: "",
    currentComment: "",
    employee: ""
  };





  constructor(private reimbursementService: ReimbursementService, private router: Router) {
  }

  oneReimbursement: Reimbursement = {
    reimbursementID: 0,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "",
    amount: 0,
    status: "p",
    dateUpdated: "",
    merchant: "",
    statusID: 0,

    details: "",
    currentComment: "",
    employee: ""
  };





  ngOnInit(): void {
    this.allReimbursements = this.reimbursementService.fetchAllReimbursements();
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
  goToEditReimbursement(reimbursementID: number) {
    this.router.navigate(['edit-Reimbursement',reimbursementID]);
  }




  deleteReimbursement(reimbursementID: number) {
    this.allReimbursements = this.reimbursementService.deleteReimbursement(reimbursementID);
  }

  addReimbursement() {
    let addNewReimbursement: Reimbursement = {
      reimbursementID: 0,
      dateSubmitted: this.newReimbursement.dateSubmitted,
      dateOfTransaction: this.newReimbursement.dateOfTransaction,
      employeeID: this.newReimbursement.employeeID,
      expenseType: this.newReimbursement.expenseType,
      amount: this.newReimbursement.amount,
      status: this.newReimbursement.status,
      dateUpdated: this.newReimbursement.dateUpdated,
      merchant: this.newReimbursement.merchant,
      details: "",
      currentComment: "",
      employee: "",
      statusID: 0
    };
    this.reimbursementService.addReimbursement(addNewReimbursement);
    this.allReimbursements = this.reimbursementService.fetchAllReimbursements();
  }
}
