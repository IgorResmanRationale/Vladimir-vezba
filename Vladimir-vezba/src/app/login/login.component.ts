import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Account } from '../models/employe.model';
import { Router } from '@angular/router';
import { LoginServiceService } from '../LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('accountUsername') accountUsernameRef: ElementRef | undefined;
  @ViewChild('accountPassword') accountPasswordRef: ElementRef | undefined;
  @Output() userAdd = new EventEmitter <Account>();

  constructor(private router: Router, private service: LoginServiceService) { }

  ngOnInit(): void {
  }

  onLogin(){
    const ingUsername=this.accountUsernameRef?.nativeElement.value;
    const ingPassword=this.accountPasswordRef?.nativeElement.value;
    const newUser = this.populateUserData(ingUsername, ingPassword);
    this.userAdd.emit(newUser);
  }
 
  populateUserData(ingUsername: string, ingPassword: string){
    const newUser = new Account();
    newUser.username = ingUsername;
    newUser.password = ingPassword;
    return newUser;
  }

  onSingIn(username: string, password: string){
    const accounts = this.service.getAccounts();
    const acc = accounts.find( x  => x.username === username)
   if(acc != null && acc.password === password)
     alert('Korisnik uspesno ulogovan')
   else
     alert('Korisnik ne postoji u sistemu')
 }
}
