import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavItems } from './models/nav-items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,RouterModule, CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
   navItems: NavItems[] = [
    { title: 'Dashboard', icon: 'fa-solid fa-chart-line', route: '/dashboard' },
    { title: 'Accounts',  icon: 'fa-solid fa-wallet', route: '/accounts' },
    { title: 'Transactions', icon: 'fa-solid fa-exchange-alt', route: '/transactions' },
    { title: 'Reports', icon: 'fa-solid fa-file-alt', route: '/reports' },
  ];
  userName: string = 'Shyam Mashru';
  // userAvatarUrl: string = 'https://ui-avatars.com/api/?name=John+Doe&background=0f172a&color=fff';
  userPlan: string = 'PREMIUM';
  currentDate: Date = new Date();

  changeMonth(offset: number): void {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    this.currentDate = newDate;
  }
}
