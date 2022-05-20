import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { Account } from '../models/employe.model';
import { EmployeeServiceService} from '../employee-service.service';
import { Observable} from 'rxjs';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  @ViewChild('accountId') accountIdRef: ElementRef | undefined;
  @ViewChild('accountName') accountNameRef: ElementRef | undefined;
  @ViewChild('accountlastName') accountlastNameRef: ElementRef | undefined;
  @ViewChild('accountposition') accountpositionRef: ElementRef | undefined;
  @ViewChild('accountemail') accountemailRef: ElementRef | undefined;
  @ViewChild('accountUsername') accountUsernameRef: ElementRef | undefined;
  @ViewChild('accountPassword') accountPasswordRef: ElementRef | undefined;
  @ViewChild('accountaltEmail') accountaltEmailRef: ElementRef | undefined;
  @ViewChild('accountstatus') accountstatusRef: ElementRef | undefined;
  @ViewChild('accountcompany') accountcompanyRef: ElementRef | undefined;
  @ViewChild('accountdesignaton') accountdesignatonRef: ElementRef | undefined;
  @ViewChild('accountinitials') accountinitialsRef: ElementRef | undefined;
  @ViewChild('accountworkPhone') accountworkPhoneRef: ElementRef | undefined;
  @ViewChild('accountmobilPhone') accountmobilPhoneRef: ElementRef | undefined;
  @Output() accountAdd = new EventEmitter <Account>();
  public addObservable!: Observable<Account[]>
 

  constructor(private service: EmployeeServiceService) {}


  ngOnInit(): void {

  }
   obs(){
    this.addObservable = new Observable<Account[]>(observer =>{
    const ingId=this.accountIdRef?.nativeElement.value;
    const ingName=this.accountNameRef?.nativeElement.value;
    const inglastName=this.accountlastNameRef?.nativeElement.value;
    const ingPosition=this.accountpositionRef?.nativeElement.value;
    const ingemail=this.accountemailRef?.nativeElement.value;
    const ingUsername=this.accountUsernameRef?.nativeElement.value;
    const ingPassword=this.accountPasswordRef?.nativeElement.value;
    const ingaltEmail=this.accountaltEmailRef?.nativeElement.value;
    const ingstatus=this.accountstatusRef?.nativeElement.value;
    const ingcompany=this.accountcompanyRef?.nativeElement.value;
    const ingdesignaton=this.accountdesignatonRef?.nativeElement.value;
    const inginitials=this.accountinitialsRef?.nativeElement.value;
    const ingworkPhone=this.accountworkPhoneRef?.nativeElement.value;
    const ingmobilPhone=this.accountmobilPhoneRef?.nativeElement.value;
    const newAccount = this.populateAccountData(ingId, ingName, inglastName, ingPosition, ingemail, ingUsername,
      ingPassword, ingaltEmail, ingstatus, ingcompany, ingdesignaton, inginitials, ingworkPhone, ingmobilPhone, );
    this.accountAdd.emit(newAccount);
  }) 
}
  // btnLogin(){
  //   const ingId=this.accountIdRef?.nativeElement.value;
  //   const ingName=this.accountNameRef?.nativeElement.value;
  //   const inglastName=this.accountlastNameRef?.nativeElement.value;
  //   const ingPosition=this.accountpositionRef?.nativeElement.value;
  //   const ingemail=this.accountemailRef?.nativeElement.value;
  //   const ingUsername=this.accountUsernameRef?.nativeElement.value;
  //   const ingPassword=this.accountPasswordRef?.nativeElement.value;
  //   const ingaltEmail=this.accountaltEmailRef?.nativeElement.value;
  //   const ingstatus=this.accountstatusRef?.nativeElement.value;
  //   const ingcompany=this.accountcompanyRef?.nativeElement.value;
  //   const ingdesignaton=this.accountdesignatonRef?.nativeElement.value;
  //   const inginitials=this.accountinitialsRef?.nativeElement.value;
  //   const ingworkPhone=this.accountworkPhoneRef?.nativeElement.value;
  //   const ingmobilPhone=this.accountmobilPhoneRef?.nativeElement.value;
  //   const newAccount = this.populateAccountData(ingId, ingName, inglastName, ingPosition, ingemail, ingUsername,
  //     ingPassword, ingaltEmail, ingstatus, ingcompany, ingdesignaton, inginitials, ingworkPhone, ingmobilPhone, );

  
  //   this.accountAdd.emit(newAccount);
    
  // }
  populateAccountData(ingId: any ,ingName: any, inglastName: any, ingPosition: any, ingemail: any, ingUsername: string,
     ingPassword: string, ingaltEmail: any, ingstatus: any,ingcompany: any,ingdesignaton: any,inginitials: any,ingworkPhone: any,ingmobilPhone: any,): Account {
    const newAccount = new Account();
    newAccount.id = ingId;
    newAccount.name = ingName;
    newAccount.lastName = inglastName;
    newAccount.position = ingPosition;
    newAccount.email = ingemail;
    newAccount.username = ingUsername;
    newAccount.password = ingPassword;
    newAccount.altEmail = ingaltEmail;
    newAccount.status = ingstatus;
    newAccount.company = ingcompany;
    newAccount.designaton = ingdesignaton;
    newAccount.initials = inginitials;
    newAccount.workPhone = ingworkPhone;
    newAccount.mobilPhone = ingmobilPhone;


    return newAccount;
  }

  
}
