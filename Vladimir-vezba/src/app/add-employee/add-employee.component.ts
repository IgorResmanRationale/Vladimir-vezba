import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name!: string;
  lastName!: string;
  birthDate!: Date;
  securityNumber!: number;
  age!: number;
  position!: string;
  email!: string;
  username!: string;
  password!: string;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  onSave()
  {
    this.service.addEmployee({id: 0,name: this.name, lastName: this.lastName, birthDate: this.birthDate, securityNumber: this.securityNumber,
    age: this.age, position: this.position, email: this.email, username: this.username, password: this.password});
    this.emptyValues();
    alert("User successfully created");
  }

  emptyValues()
  {
    this.name = '';
    this.lastName = '';
    this.birthDate = new Date();
    this.age = 0;
    this.securityNumber = 0;
    this.position = '';
    this.email = '';
    this.username = '';
    this.password = '';
  }
}
