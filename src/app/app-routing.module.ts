import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { TransactionsComponent } from './transactions/transactions.component';

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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
