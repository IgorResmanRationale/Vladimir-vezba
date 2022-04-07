import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Account } from '../models/employe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSecret = false;
  showSecret1 = false;

  constructor(private service: EmployeeServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  onShow(){
    this.showSecret = true;
    this.showSecret1 = false;
  }

  onShow1(){
    this.showSecret1 = true;
    this.showSecret = false;
  }

  onAccountAdd(account: Account){
    this.service.addAccount(account)
   alert("Zaposleni je uspesno kreiran");
  }

  
 onRout(){
  this.router.navigate(['/login']);
}


}
