import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin()
  {
    if(this.username != null && this.password != null)
      alert(this.loginService.login(this.username, this.password));
    else
      alert('Validation error');
  }

}
