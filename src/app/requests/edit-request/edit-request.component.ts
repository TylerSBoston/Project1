import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
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

  }

  constructor(
    private activatedRoute: ActivatedRoute, 
    private requestService: RequestService,
    private router: Router) { }

  ngOnInit(): void {
    //to take out route parameter we need to inject ActivatedRoute
    let requestId: any = this.activatedRoute.snapshot.paramMap.getAll("idParameter")
    //fetch request from service layer
    this.newRequest = this.requestService.fetchARequest(requestId);
  }

  test(myEmployeeId: any){
    console.log();
  }

  updateRequest(){
    this.requestService.updateRequest(this.newRequest);
    this.router.navigate(['list-request']);

  }

}
