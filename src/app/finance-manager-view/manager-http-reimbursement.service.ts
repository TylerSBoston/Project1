import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerHttpReimbursementService {

  constructor(private http: HttpClient) { }

  getPendingReimbursements(): Observable<Reimbursement[]>{


    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsPending")

  }

  getCompletedReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsResolved")
  }

  getAllReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsAll")
  }
  getEmployeeReimbursements(employeeID: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsEmployee/"+employeeID)
  }


}
