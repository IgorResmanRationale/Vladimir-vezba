import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Account } from '../models/employe.model';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  accounts: Account[] = [];
  account!: Account | undefined;
  accountId!: number;
  constructor(private service: EmployeeServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setAccountId();
    this.account = this.service.accounts.find(x => x.id == this.accountId);
  }

  setAccountId()
  {
    this.route.params.subscribe((params: any) => {
      this.accountId = +params.id
    })
  }

  saveData(account: Account){
    let itemIndex = this.accounts.findIndex(item => item.id == account.id);
this.accounts[itemIndex] = account;
alert('Zaposleni je uspesno izmenjen')
}
}
