import { Injectable, EventEmitter } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Account } from './models/employe.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  accounts: Account[] = [
    {id: 0, name: 'Petar', lastName: 'Petrovic', birthDate: new Date("1998-07-15") , secNumber: 543251,age: 32,position: 'Student', email:'petar.petrovic@gmail.com', username: 'Pera',
     password: 'Pera', altEmail:'petar.petrovic1@gmail.com', status: 'Active', company: '1', designaton: 'qwerty', initials: 'd2r4t5', workPhone: 555-333, mobilPhone: +381435433 }
  ];


addAccount(account: Account){
  //kreirati logiku za dodavanje id (id od poslednjeg unesenog + 1)  
    const id = this.accounts.length
    account.id = id
    this.accounts.push(account)
    console.table(this.accounts);   

 }


onDelete(accountId: number)
{
  this.accounts.forEach((value,index)=>{
      if(value.id==accountId) this.accounts.splice(index,1);
      console.table(this.accounts);
  });}

  
updateItem(account: Account){
    let itemIndex = this.accounts.findIndex(item => item.id == account.id);
this.accounts[itemIndex] = account;
}
}
