import { Component, OnInit, SimpleChanges, } from '@angular/core';
import { LoginServiceService } from '../LoginService.service';
import { Router } from '@angular/router';
import { Account } from '../models/employe.model';
import { EmployeeServiceService } from '../employee-service.service';
import { debounceTime, Observable, scan, startWith, Subscription, BehaviorSubject, distinctUntilChanged} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
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
  debounce = 500;



  constructor(private service1: LoginServiceService, private service: EmployeeServiceService, private router: Router) { }
  
  ngOnInit(): void {
    this.textControl = new FormControl('');
    this.textControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(data => {
        // const subject = new BehaviorSubject(query)
        // subject.subscribe(data => {
        if (data.length < 3 && data.length > 0) {
              this.showSecret = true
              console.log('Username length ' + data.length + ' Error');
            }
            else {
              this.showSecret = false
              console.log('Username length ' + data.length);
            }
            if (data == 0) {
              this.showSecret2 = true
            }
            else { this.showSecret2 = false }});
     
  
      this.textControl1 = new FormControl('');
      this.textControl1.valueChanges
        .pipe(debounceTime(this.debounce), distinctUntilChanged())
        .subscribe(query => {
          const subject = new BehaviorSubject(query)
          subject.subscribe(data => {
            if (data.length < 8 && data.length > 0) {
                  this.showSecret1 = true
                  console.log('Password length ' + data.length + ' Error');
                }
                else {
                  this.showSecret1 = false
                  console.log('Password length ' + data.length);
                }
          
                if (data.length == undefined) {
                  this.showSecret3 = true
                }
                else { this.showSecret3 = false }
          
                var passwordRequirements = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/;
                if (!passwordRequirements.test(data) && this.showSecret3 == false && data.length > 0) {
                  this.showSecret4 = true
                }
                else { this.showSecret4 = false };})})
  
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
