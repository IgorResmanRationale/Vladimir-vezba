import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Account } from '../models/employe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  passwordConfirm = '';
  showSecret = true;
  showSecret1 = false;
  accounts: Account[] = [];
  account!: Account | undefined;
  accountId!: number;
  constructor(private service: EmployeeServiceService, private route: ActivatedRoute, private router: Router) { }

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
this.router.navigate(['/']);
}

onShow(){
  this.showSecret = true;
  this.showSecret1 = false;
}

onShow1(){
  this.showSecret1 = true;
  this.showSecret = false;
}



savePass(account: Account){
  if(account.password == this.passwordConfirm){
    let itemIndex = this.accounts.findIndex(item => item.id == account.id);
this.accounts[itemIndex] = account;
alert('Lozinka je uspesno izmenjena')
this.router.navigate(['/']);
  } else {
    alert('Morate potvrditi lozinku')
  }
}


}
