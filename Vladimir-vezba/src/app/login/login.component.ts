import { Component, OnInit,} from '@angular/core';
import { LoginServiceService } from '../LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginServiceService) { }

  ngOnInit(): void {
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
