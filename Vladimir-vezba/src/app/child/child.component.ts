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
  
  

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
  if(this.prezime.length < 2, this.ime.length < 3, this.username.length < 5, this.password.length < 5, !this.email.includes('@') && !this.email.includes('.com')){
    alert("ime mora imati bar 3 karaktera, prezime mora imati bar 2 karaktera, username i password moraju imati bar 5 karaktera, email nije dobro popunjen")
    this.showSecret = true;
  } else  {
    alert("ulogovao si se")
    this.showSecret = false;
    this.show.emit(true);
  }
  //this.show.emit(true);
  
  }
 
}
 
 

