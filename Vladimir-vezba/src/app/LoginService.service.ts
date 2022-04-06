import { Injectable, EventEmitter } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { EmployeeServiceService } from './employee-service.service';
import { Account } from './models/employe.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
    constructor(private service: EmployeeServiceService) {}

getAccounts(){
    return this.service.accounts
}

}