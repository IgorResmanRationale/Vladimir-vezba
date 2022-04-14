import { Component, OnInit, Input } from '@angular/core';
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

  // accounts: Account[] = [];
  account!: Account | undefined;
  accountId!: number;
  showSecret = false;
  showSecret1 = false;
  

  constructor(private service: EmployeeServiceService, private router: Router, 
    private service1: LoginServiceService, private route: ActivatedRoute) {}

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

  onShow(){
    this.showSecret = true;
    this.showSecret1 = false;
  }

  onShow1(){
    this.showSecret1 = true;
    this.showSecret = false;
  }

  onAccountAdd(account: Account){
    this.service.addAccount(account)
   alert("Zaposleni je uspesno kreiran");
  }

  
 onRout(username: string, password: string){
  const accounts = this.service1.onSingIn( username, password);
  console.log(accounts)
}


}
