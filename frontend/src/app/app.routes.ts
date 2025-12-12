import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'transactions',
        loadComponent: () => import('./features/transaction/transaction').then(m => m.Transaction)
      },
      {
        path: 'accounts',
        loadComponent: () => import('./features/account/account').then(m => m.Account)
      }
    ]
  }
];
