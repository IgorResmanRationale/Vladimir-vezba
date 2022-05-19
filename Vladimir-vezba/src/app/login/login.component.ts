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

 onSingIn1(username: string, password: string){
 this.service.onSingIn(username, password)
}
}
