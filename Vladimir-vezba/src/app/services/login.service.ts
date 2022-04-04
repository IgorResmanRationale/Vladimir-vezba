import { Injectable } from "@angular/core";
import { EmployeeService } from "./employee.service";

@Injectable()
export class LoginService{
    constructor(private employeeService: EmployeeService){}

    login(username: string, password: string) : string
    {
        return this.employeeService.findUserByUsernameAndPassword(username,password)
    }
}