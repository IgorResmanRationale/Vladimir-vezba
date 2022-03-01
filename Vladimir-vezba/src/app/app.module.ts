import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './child/child.component.directive';
import { HighlightDirective1 } from './app.component.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective,
    HighlightDirective1
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }