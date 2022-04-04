import { Component, ViewChild } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signUpChild') signUpChild! : SignUpComponent;
  showValidationMessage(message : string)
  {

    if(this.signUpChild != null && !this.signUpChild.areFieldsValid)
    {
      //dodatak
      alert(message);
      //nije trebalo ovako da se ispise nego u html ali je prikazano da bi se videlo da je moguce stilizovati poruke u konzoli
      console.log('%c' + message , 'color:red')
    }
    if(this.signUpChild != null && this.signUpChild.areFieldsValid)
    {
      //dodatak
      alert('User successfully registered');
      console.log('%cUser successfully created' , 'color:green')
    }
  }
}
