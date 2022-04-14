import { Component, OnInit,} from '@angular/core';
import { LoginServiceService } from '../LoginService.service';
import { Router } from '@angular/router';
import { Account } from '../models/employe.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account!: Account | undefined;

  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  

//   onSingIn(username: string, password: string){
//     const accounts = this.service.getAccounts();
//     const acc = accounts.find( x  => x.username === username)
//    if(acc != null && acc.password === password){
//       this.router.navigate(['/home']);
//      alert('Korisnik uspesno ulogovan')
//     const name = acc.name;
//     const lastName = acc.lastName;
//      console.log(name + ' ' + lastName)}
//    else
//      alert('Korisnik ne postoji u sistemu')
//  }
 onSingIn1(username: string, password: string){
 this.service.onSingIn(username, password)
//  this.router.navigate(['/home']);
//  alert('Korisnik uspesno ulogovan')
}
}
