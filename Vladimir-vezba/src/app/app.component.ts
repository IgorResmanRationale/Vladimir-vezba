import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  constructor() { }
  
  showRegistertationMessage = false;
  boolShow(boolshow: boolean){
    this.showRegistertationMessage = boolshow;
 }

}
