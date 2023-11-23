import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    { path:'login',component: LoginComponent },
    {path:'Home',component:HomepageComponent},
    {path:'empDetails',component:EmpAddEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:'login',component: LoginComponent },
    {path:'Home',component:HomepageComponent},
  ])
],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
