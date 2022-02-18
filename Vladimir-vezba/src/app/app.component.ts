import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vladimir-vezba';
  username = '';
  password = '';
  isLoginButtonClicked = false;
  usernameArr: any = [];

  onLogin(){
    this.isLoginButtonClicked = true;
    for(let i = 0; i < this.username.length; i++)
    {
      console.log(this.username[i])
    }
    //Dodatak
    alert("Ulogovao si se");
  }

  onUsernameChange()
  {
    this.usernameArr = [];
    for(let i = 0; i < this.username.length; i++)
    {
      this.usernameArr.push(this.username[i]);
    }
  }

  // username = '';
  // password = '';
  // showSecret = false;
  

  // btnLogin(){
  //   this.showSecret=!this.showSecret;
  //   this.username.split('');
  // }
}
