import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';



@Component({
  selector: 'app-edit-reimbursement',
  templateUrl: './edit-reimbursement.component.html',
  styleUrls: ['./edit-reimbursement.component.css']
})
export class EditReimbursementComponent implements OnInit {
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

  }

  constructor(
    private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router) { }

  ngOnInit(): void {
    //to take out route parameter we need to inject ActivatedRoute
    let reimbursementID: any = this.activatedRoute.snapshot.paramMap.getAll("idParameter")
    //fetch reimbursement from service layer
     this.reimbursementService.fetchAReimbursement(reimbursementID);
  }

  test(myEmployeeId: any){
    console.log();
  }

  updateReimbursementt(){
    this.reimbursementService.updateReimbursement(this.newReimbursement);
    this.router.navigate(['list-reimbursement']);

  }
}
