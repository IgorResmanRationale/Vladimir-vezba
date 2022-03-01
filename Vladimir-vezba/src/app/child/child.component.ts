import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() show = new EventEmitter<boolean>();
  @Input() password = '';
  @Input() prezime = '';
  @Input() username = '';
  @Input() ime= '';
  @Input() showSecret = false;
  @Input() email= '';
  showSecret0 = false;
  showSecret1 = false;
  showSecret2 = false;
  showSecret3 = false;
 
  
  
  

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.ime.length < 3){
    alert("ime mora imati bar 3 karaktera")
    this.showSecret0 = true;
    this.showSecret = true;}
    if (this.prezime.length < 2) {
    alert("prezime mora imati bar 2 karaktera")
    this.showSecret1 = true;
    this.showSecret = true;}
    if (this.username.length < 5, this.password.length < 5) { 
    alert("username i password moraju imati bar 5 karaktera")
    this.showSecret2 = true;
    this.showSecret = true;}
    if (!this.email.includes('@') && !this.email.includes('.com')){
    alert("email nije dobro popunjen")
    this.showSecret3 = true;
    this.showSecret = true;}
    else {
    alert("ulogovao si se")
    this.showSecret = false;
    this.show.emit(true);
    }
    
  



  }
 
}
 
 

