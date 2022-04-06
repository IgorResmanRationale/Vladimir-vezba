import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {EmployeeServiceService} from './employee-service.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginServiceService } from './LoginService.service';
import { UserInfoComponent } from './user-info/user-info.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    HomeComponent,
    LoginComponent,
    UserInfoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [EmployeeServiceService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }