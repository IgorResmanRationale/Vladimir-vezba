import { Employee } from "../models/employee.model";

export class EmployeeService
{
    employeeList: Employee[] = [
        {
          id: 1,
          name: "Igor",
          lastName: "Resman",
          birthDate: new Date("1995-08-24"),
          securityNumber: 123456789,
          age: 26,
          position: "Developer",
          email: "igor.resman@rationaletech.com",
          username: "igor",
          password: "igor"
        },
        {
          id: 2,
          name: "Vladimir",
          lastName: "Skokin",
          birthDate: new Date("1998-01-01"),
          securityNumber: 123456789,
          age: 24,
          position: "Student",
          email: "vladimir.skokin@rationaletech.com",
          username: "vladimir",
          password: "vladimir"
        }
      ];

    addEmployee(employee: Employee)
    {
      const lastId = this.employeeList[this.employeeList.length - 1].id;
      employee.id = lastId + 1;
      this.employeeList.push(employee);
    }

    removeEmployee(employeeId: number)
    {
        const employeeForDeletionIndex = this.employeeList.findIndex(x => x.id == employeeId);
        this.employeeList.splice(employeeForDeletionIndex, 1);
    }

    getEmployeeList() : Employee[]
    {
        return this.employeeList;
    }

    updateEmployee(employee: Employee)
    {
      const index = this.employeeList.findIndex(x => x.id == employee.id);
      this.employeeList[index] = employee;
    }

    findUserByUsernameAndPassword(username: string, password: string): string
    {
      const employee = this.employeeList.find(x => x.username === username);
      if(employee && employee.password === password)
      {
        return 'User with username ' + employee.username + ' successfully logged in'
      }
      return 'User with this credencials does not exist in system';
    }
}