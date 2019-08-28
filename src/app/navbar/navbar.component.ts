import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddmoneyComponent } from '../addmoney/addmoney.component';
import { TransactionsComponent } from '../transactions/transactions.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
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
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu:any[];

  constructor() { }

  ngOnInit() {
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

}
