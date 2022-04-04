import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  @ViewChild('employeeList', {static: false}) employeeList!: EmployeeListComponent
  @ViewChild('addEmployee', {static: false}) addEmployee!: AddEmployeeComponent
  activeTab: string = '';

  constructor(private router: Router){}
  onTabChange(tabName: string)
  {
    this.activeTab = tabName;
  }

  onLogin()
  {
    this.router.navigate(['/login']);
  }
}
