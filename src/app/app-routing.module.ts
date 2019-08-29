import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransfersComponent } from './transfers/transfers.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpassComponent} from './forgotpass/forgotpass.component';
import { MainComponent } from './main/main.component';
import { AboutoutComponent } from './aboutout/aboutout.component';
import { ContactoutComponent } from './contactout/contactout.component';

export const router: Routes = [
  {
    path:'home',component:DashboardComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'addmoney',component:AddmoneyComponent
  },
  {
    path:'transactions',component:TransactionsComponent
  },
  {
    path:'transfers',component:TransfersComponent
  },
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  //{path:'home',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'forgotpassword',component:ForgotpassComponent},
  {path:'main',component:MainComponent},
  {path:'main/about',component:AboutoutComponent,pathMatch:'full'},
  {path:'main/contact',component:ContactoutComponent},
  {path:'main/login',component:MainComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
