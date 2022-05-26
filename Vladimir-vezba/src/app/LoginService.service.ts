import { Injectable, EventEmitter } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { EmployeeServiceService } from './employee-service.service';
import { Account } from './models/employe.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private service: EmployeeServiceService, private router: Router) { }

  getAccounts() {
    return this.service.accounts
  }

  // onSingIn(username: string, password: string,) {
  //   const accounts = this.getAccounts();
  //   const acc = accounts.find(x => x.username === username)
  //   this.validation = this.textControl.valueChanges.pipe(
  //     debounceTime(500), 
  //     startWith(username), 
  //     scan((acc, t) => t ? acc.concat(t) : [], [])
  //   );
  //   console.log(this.validation.pipe)
  //   if (acc != null && acc.password === password && acc.username.length === +this.validation ) {
  //     this.router.navigate(['/home']);
  //     sessionStorage.setItem('Id', acc.id.toString())
  //     sessionStorage.setItem('FullName', acc.name + ' ' + acc.lastName);
  //     sessionStorage.setItem('Permission', acc.profile.permission);
  //     alert('Korisnik uspesno ulogovan')
  //     return;
  //   }
  //   else
  //     alert('Korisnik ne postoji u sistemu')
  // }


}