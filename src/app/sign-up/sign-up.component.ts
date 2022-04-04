import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Output('validationOutput') validationOutput = new EventEmitter<string>();
  @Output('messagesFinished') messagesFinished = new EventEmitter<string>();
  areFieldsValid: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  name = '';
  lastName = '';
  username = '';
  password = '';
  email = '';
  validationMessage: string = '';

  onSignUp(){
    if(this.name.length < 3)
    {
      this.validationMessage = this.validationMessage + 'Validation message: Name must contains at least 3 characters\n'
      this.areFieldsValid = false;
    }
    if(this.lastName.length < 2)
    {
      this.validationMessage = this.validationMessage + 'Validation message: Last nmame must contains at least 2 characters\n'
      this.areFieldsValid = false;
    }
    if(this.username.length < 5)
    {
      this.validationMessage = this.validationMessage + 'Validation message: Username must contains at least 5 characters\n'
      this.areFieldsValid = false;
    }
    if(this.password.length < 5)
    {
      this.validationMessage = this.validationMessage + 'Validation message: Password must contains at least 5 characters\n'
      this.areFieldsValid = false;
    }
    if(!this.email.includes('@') || !this.email.includes('.com'))
    {
      this.validationMessage = this.validationMessage + 'Validation message: Email must be in format example@test.com\n'
      this.areFieldsValid = false;
    }
    this.validationOutput.emit(this.validationMessage);
    this.messagesFinished.emit();

    this.validationMessage = '';
    this.areFieldsValid = true;
  }
}
