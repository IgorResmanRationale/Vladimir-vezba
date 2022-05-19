import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Account } from '../models/employe.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']

})
export class EmployeeListComponent implements OnInit {
  accounts: Account[] = [];
  showSecret = false;
  employeeForEdit: Account | undefined;

  constructor(private service: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.accounts = this.service.accounts;
    console.table(this.accounts);
  }


  onAccountAdd(account: Account) {
    this.service.addAccount(account)
    alert("Zaposleni je uspesno kreiran");
  }

  btnDelete(accountId: number) {
    this.service.onDelete(accountId);
  }

  btnCancel() {
    this.showSecret = false;
  }


  editRout(accountId: number) {
    this.router.navigate(['/user-info/', accountId]);
  }

  getAccounts() {
    return this.service.accounts
  }

}





