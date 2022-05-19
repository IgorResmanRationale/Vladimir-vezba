import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Account } from '../models/employe.model';
import { LoginServiceService } from '../LoginService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts: Account[] = [];
  account!: Account | undefined;
  accountId!: number;
  showSecret = false;
  showSecret1 = false;
  showSecret2 = false;
  show0 = false;
  show1 = false;


  constructor(private service: EmployeeServiceService, private router: Router,
    private service1: LoginServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show();
  }

  show() {
    const user = this.storageName();
    const accounts = this.getAccounts();
    const acc = accounts.find(x => x.name + ' ' + x.lastName == user)
    if (acc != null && acc.profile.permission === 'admin' && acc.profile.name === 'Sysadmin') {
      this.show0 = true;
      this.show1 = false
    }
    else {
      this.show1 = true;
      this.show0 = false
    }
  }

  getAccounts() {
    return this.service.accounts
  }

  storageName() {
    return sessionStorage.getItem('FullName');
  }

  onShow() {
    const user = this.storageName();
    const accounts = this.getAccounts();
    const acc = accounts.find(x => x.name + ' ' + x.lastName == user)
    if (acc != null && acc.profile.permission === 'admin' && acc.profile.name === 'Sysadmin') {
      this.showSecret = true;
      this.showSecret1 = false
      this.showSecret2 = false
    }
    else {
      this.showSecret2 = true;
      this.showSecret1 = false;
      this.showSecret = false;
    }
  }

  onShow1() {
    const user = this.storageName();
    const accounts = this.getAccounts();
    const acc = accounts.find(x => x.name + ' ' + x.lastName == user)
    if (acc != null && acc.profile.permission === 'admin' && acc.profile.name === 'Sysadmin') {
      this.showSecret1 = true;
      this.showSecret = false
      this.showSecret2 = false
    }
    else {
      this.showSecret1 = false;
      this.showSecret = false;
      this.showSecret2 = true;
    }
  }

  onAccountAdd(account: Account) {
    this.service.addAccount(account)
    alert("Zaposleni je uspesno kreiran");
  }

  onLogout() {
    this.router.navigate(['/']);
    sessionStorage.removeItem('ID');
  }

}
