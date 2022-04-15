import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Injectable, EventEmitter } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Account, Profile} from './models/employe.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  accounts: Account[] = [
    {id: 0, name: 'admin', lastName: 'admin', position: 'admin', email:'admin.admin@gmail.com', username: 'admin',
     password: 'admin', altEmail:'admin.admin1@gmail.com', status: 'Active', company: '1', designaton: 'xxxxx', initials: 'xxxxxx', workPhone: 222-333, mobilPhone: +381543676,
      profile: { name: 'Sysadmin', permission: 'admin'} },
    {id: 1, name: 'Petar', lastName: 'Petrovic', position: 'Student', email:'petar.petrovic@gmail.com', username: 'Pera',
     password: 'Pera', altEmail:'petar.petrovic1@gmail.com', status: 'Active', company: '1', designaton: 'qwerty', initials: 'd2r4t5', workPhone: 555-333, mobilPhone: +381435433,
     profile: { name: 'Employe', permission: 'view'} },
    {id: 2, name: 'Vladimir', lastName: 'Skokin',position: 'Student', email:'vladimir.skokin@gmail.com', username: 'Vladi',
     password: '123456', altEmail:'vladimir.skokin1@gmail.com', status: 'Active', company: '2', designaton: 'fdsrty', initials: 'd2f4f3', workPhone: 555-777, mobilPhone: +381436633, 
     profile: { name: 'Employe', permission: 'view'} }
    ];

    profile: Profile[]=[
      {name: 'admin', permission:'Admin'}
    ]


addAccount(account: Account){
  //kreirati logiku za dodavanje id (id od poslednjeg unesenog + 1)  
    account.id = this.accounts.length;
    this.accounts.push(account)
    console.table(this.accounts);  
 }


onDelete(accountId: number)
{
  this.accounts.forEach((value,id)=>{
      if(value.id==accountId) this.accounts.splice(id,1);
      console.table(this.accounts);
  });}

  
updateItem(account: Account){
    let itemIndex = this.accounts.findIndex(item => item.id == account.id);
this.accounts[itemIndex] = account;
}

// onSingIn(username: string, password: string){
//   const accounts = this.accounts;
//   const acc = accounts.find( x  => x.username === username)
//  if(acc != null && acc.password === password){
//     this.router.navigate(['/home']);
//    alert('Korisnik uspesno ulogovan')
//   const name = acc.name;
//   const lastName = acc.lastName;
//    console.log(name + ' ' + lastName)}
//  else
//    alert('Korisnik ne postoji u sistemu')
// }

}
