import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerHttpReimbursementService } from '../manager-http-reimbursement.service';

@Component({
  selector: 'app-view-reimbursements',
  templateUrl: './view-reimbursements.component.html',
  styleUrls: ['./view-reimbursements.component.css']
})
export class ViewReimbursementsComponent implements OnInit {


  allReimbursements: Reimbursement[] = [];



  newReimbursement: Reimbursement = {
    reimbursementID: 0,
    statusID: 0,
    employeeID: 0,
    employee: '',
    status: '',
    expenseType: '',
    merchant: '',
    amount: 0,
    details: '',
    currentComment: '',
    dateOfTransaction: '',
    dateSubmitted: '',
    dateUpdated: ''
  }

  constructor(private  MHRS:ManagerHttpReimbursementService, private router: Router) { }



  ngOnInit(): void {
    this.getAllReimbursements();
  }

  getPendingReimbursements(){
    this.MHRS.getPendingReimbursements().subscribe((response)=>{
      this.allReimbursements = response;
    });
  }
  getCompletedReimbursements(){
    this.MHRS.getCompletedReimbursements().subscribe((response)=>{
      this.allReimbursements = response;
    });
  }
  getAllReimbursements(){
    this.MHRS.getAllReimbursements().subscribe((response)=>{
      console.log(response);
      this.allReimbursements = response;
    });
  }
  
  getEmployeeReimbursements(employeeID: number){
    this.MHRS.getEmployeeReimbursements(employeeID).subscribe((response)=>{
      this.allReimbursements = response;
    });
  }



}
