import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'user-info/:id', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }