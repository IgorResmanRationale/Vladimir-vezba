import { Component, OnInit} from '@angular/core';
import { LoginServiceService } from '../LoginService.service';
import { Router } from '@angular/router';
import { Account } from '../models/employe.model';
import { EmployeeServiceService } from '../employee-service.service';
import { Subscription, BehaviorSubject, distinctUntilChanged} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  account!: Account | undefined;
  username = '';
  password = '';
  private firstObsSubscription!: Subscription;
  private secondObsSubscription!: Subscription;
  lastElementUser = '';
  lastElementPass = '';
  showUserError = false;
  showPassError = false;
  showEmptyUser = false;
  showEmptyPass = false;
  PassRequirements = false;
  usernameMinValue = 3;
  passwordMinValue = 8;
  minShowError = 0;

  constructor(private service1: LoginServiceService, private service: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    if(this.username == ''){
      this.showEmptyUser = true
    }
    else { this.showEmptyUser = false }
    if(this.password == ''){
      this.showEmptyPass = true
    }
    else { this.showEmptyPass = false }
  }

  UsernameValidation(event: any){
    var usernameRequirements = /^.{3,}$/;
    this.lastElementUser = event.target.value
    const subject = new BehaviorSubject(this.lastElementUser)
    subject.next(this.lastElementUser)
    subject.subscribe(data => {
             if (!usernameRequirements.test(data) && data.length > this.minShowError ) {
                this.showUserError = true
                console.log('Username length ' + data.length + ' Error');
              }
              else {
                this.showUserError = false
                console.log('Username length ' + data.length);
              }
              if (data.length == 0) {
                this.showEmptyUser = true
              }
              else { this.showEmptyUser = false }
            })
  }

  PasswordValidation(event: any){
    var passwordNumRequirements = /^.{8,}$/;
    var passwordRequirements = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/;
    this.lastElementPass= event.target.value
    const subject = new BehaviorSubject(this.lastElementPass)
    subject.next(this.lastElementPass)
    subject.subscribe(data => {
             if (!passwordNumRequirements.test(data) && data.length > this.minShowError ) {
                this.showPassError = true
                console.log('Username length ' + data.length + ' Error');
              }
              else {
                this.showPassError = false
                console.log('Username length ' + data.length);
              }
              if (data.length == 0) {
                this.showEmptyPass = true
              }
              else { this.showEmptyPass = false }
              if (!passwordRequirements.test(data) && this.showEmptyPass == false && data.length > 0) {
                       this.PassRequirements = true
                            }
                            else { this.PassRequirements = false }
            })
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
