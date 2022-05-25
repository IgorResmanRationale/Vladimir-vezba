import { Component, OnInit, } from '@angular/core';
import { LoginServiceService } from '../LoginService.service';
import { Router } from '@angular/router';
import { Account } from '../models/employe.model';
import { EmployeeServiceService } from '../employee-service.service';
import { debounceTime, Observable, scan, startWith, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameValidation!: Observable<string[]>;
  passwordValidation: Observable<string[]> | undefined;
  textControl = new FormControl();
  textControl1 = new FormControl();
  account!: Account | undefined;
  username = '';
  password = '';
  private firstObsSubscription!: Subscription;
  private secondObsSubscription!: Subscription;
  lastElementUser = '';
  lastElementPass = '';
  showSecret = false;
  showSecret1 = false;
  showSecret2 = false;
  showSecret3 = false;
  showSecret4 = false;



  constructor(private service1: LoginServiceService, private service: EmployeeServiceService, private router: Router) { }


  ngOnInit(): void {
    this.usernameValidation = this.textControl.valueChanges.pipe(
      debounceTime(500),
      startWith(this.username),
      scan((acc, t) => t ? acc.concat(t) : [], [])
    );
    this.firstObsSubscription = this.usernameValidation.subscribe(data => {
      this.lastElementUser = data[data.length - 1];
      if (this.lastElementUser?.length < 3) {
        this.showSecret = true
        console.log('Username length ' + this.lastElementUser?.length + ' Error');
      }
      else {
        this.showSecret = false
        console.log('Username length ' + this.lastElementUser?.length);
      }
      if (this.lastElementUser == undefined) {
        this.showSecret2 = true
      }
      else { this.showSecret2 = false }
    });

    ////////////////////////////////////

    this.passwordValidation = this.textControl1.valueChanges.pipe(
      debounceTime(500),
      startWith(this.password),
      scan((acc, t) => t ? acc.concat(t) : [], [])
    );
    this.secondObsSubscription = this.passwordValidation.subscribe(data => {
      this.lastElementPass = data[data.length - 1];
      if (this.lastElementPass?.length < 8) {
        this.showSecret1 = true
        console.log('Password length ' + this.lastElementPass?.length + ' Error');
      }
      else {
        this.showSecret1 = false
        console.log('Password length ' + this.lastElementPass?.length);
      }

      if (this.lastElementPass?.length == undefined) {
        this.showSecret3 = true
      }
      else { this.showSecret3 = false }

      var passwordRequirements = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/;
      if (!passwordRequirements.test(this.lastElementPass) && this.showSecret3 == false) {
        this.showSecret4 = true
      }
      else { this.showSecret4 = false }
    });

  }

  getAccounts() {
    return this.service.accounts
  }

  onSingIn1(username: string, password: string,) {
    const accounts = this.getAccounts();
    const acc = accounts.find(x => x.username === username)
    if (acc != null && acc.password === password) {
      this.router.navigate(['/home']);
      sessionStorage.setItem('Id', acc.id.toString())
      sessionStorage.setItem('FullName', acc.name + ' ' + acc.lastName);
      sessionStorage.setItem('Permission', acc.profile.permission);
      alert('Korisnik uspesno ulogovan')
      return;
    }
    else
      alert('Korisnik ne postoji u sistemu')
  }

  //  onSingIn1(username: string, password: string){
  //  this.service1.onSingIn(username, password)
  // }
}
