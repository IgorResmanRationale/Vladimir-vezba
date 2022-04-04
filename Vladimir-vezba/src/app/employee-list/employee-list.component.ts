import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];
  constructor(private employeService: EmployeeService) { }
  employeeForEdit: Employee | undefined;

  ngOnInit() {
    this.employeeList = this.employeService.getEmployeeList();
  }

  onEmployeeEdit(employeeId: number = 0) : Employee
  {
    const employee = this.employeeList.find(x => x.id == employeeId);

    if(employee)
    {
      console.log(employee.birthDate);
      return this.employeeForEdit = Object.assign({}, employee); //clone without reference
      // return this.employeeForEdit = employee
    }

    return {} as Employee
  }

  onEditCancel()
  {
    this.employeeForEdit = undefined
  }

  onEditSave()
  {
    this.employeService.updateEmployee(this.employeeForEdit!);
    this.employeeForEdit = undefined;
    alert("User successfully updated")
  }

  onEmployeeDelete(employeeId: number)
  {
    const employeeIndex = this.employeeList.findIndex(x => x.id == employeeId)
    if(employeeIndex > -1)
      this.employeeList.splice(employeeIndex, 1);
  }
}
