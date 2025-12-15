import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueCard } from './models/value-card';
import { ActionCard } from './models/action-card';
import { AccountCard } from './models/account-card';
import { Transactions } from './models/transactions';
import { Reports } from './models/reports';
import { AddTransaction } from "../../shared/components/add-transaction/add-transaction";
import { TransactionPayload } from '../../shared/models/transaction-payload';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AddTransaction],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  showAddTransaction: boolean = false;
  transactionType: string = 'expense';

  valueCard: ValueCard[] = [
    { title: 'Total Balance', amount: '$24,500.00', icon: 'fa-solid fa-wallet', iconBgColor: 'bg-blue-100', iconTextColor: 'text-blue-600'},
    { title: 'Income', amount: '+$8,250.00', icon: 'fa-solid fa-arrow-up', iconBgColor: 'bg-green-100', iconTextColor: 'text-green-600'},
    { title: 'Expenses', amount: '-$3,400.00', icon: 'fa-solid fa-arrow-down', iconBgColor: 'bg-red-100', iconTextColor: 'text-red-600'},
    { title: 'Net Cash Flow', amount: '$0.00', icon: 'fa-solid fa-exchange-alt', iconBgColor: 'bg-yellow-100', iconTextColor: 'text-yellow-600'},
  ]
  actionCard: ActionCard[] = [
    { title: 'Add Income', icon: 'fa-solid fa-plus', bgColor: 'bg-green-50', textColor: 'text-green-600', value: 'income'},
    { title: 'Add Expense', icon: 'fa-solid fa-minus', bgColor: 'bg-red-50 ', textColor: 'text-red-600', value: 'expense'},
    { title: 'Transfer Funds', icon: 'fa-solid fa-money-bill-transfer', bgColor: 'bg-blue-50', textColor: 'text-blue-600', value: 'transfer'},
  ];
  accoountCard: AccountCard[] = [
    { accountNumber: 1, name: 'Checking Account', balance: 12500, icon: 'fa-solid fa-bank', color: 'bg-blue-500', lastUpdated: '2024-06-10' },
    { accountNumber: 2, name: 'Savings Account', balance: 8000, icon: 'fa-solid fa-piggy-bank', color: 'bg-green-500', lastUpdated: '2024-06-12' },
    { accountNumber: 3, name: 'Credit Card', balance: -2000, icon: 'fa-solid fa-credit-card', color: 'bg-red-500', lastUpdated: '2024-06-11' },
  ];
  transactions: Transactions[] = [
    { id: 1, description: 'Grocery Shopping', amount: 120.50, type: 'debit', category: 'Groceries', date: '2024-06-14' },
    { id: 2, description: 'Freelance Payment', amount: 1500.00, type: 'credit', category: 'Salary', date: '2024-06-13' },
    { id: 3, description: 'Netflix Subscription', amount: 15.99, type: 'debit', category: 'Entertainment', date: '2024-06-12' },
    { id: 4, description: 'Transfer to Savings', amount: 500.00, type: 'transfer', category: 'Transfer',  date: '2024-06-11' },
    { id: 5, description: 'Uber Ride', amount: 24.30, type: 'debit', category: 'Transport', date: '2024-06-10' },
  ];
  reports: Reports[] = [
    { title: 'June 2024 Financial Report', description: 'Summary of your financial activities for June 2024.', date: '2024-06-30', size: '2.5 MB', status: 'Completed', statusColor: 'text-green-600', icon: 'fa-solid fa-file-alt', color: 'bg-blue-100' },
    { title: 'May 2024 Financial Report', description: 'Summary of your financial activities for May 2024.', date: '2024-05-31', size: '2.3 MB', status: 'Completed', statusColor: 'text-green-600', icon: 'fa-solid fa-file-alt', color: 'bg-blue-100' },
    { title: 'April 2024 Financial Report', description: 'Summary of your financial activities for April 2024.', date: '2024-04-30', size: '2.4 MB', status: 'Pending', statusColor: 'text-yellow-600', icon: 'fa-solid fa-file-alt', color: 'bg-blue-100' },
    { title: 'March 2024 Financial Report', description: 'Summary of your financial activities for March 2024.', date: '2024-03-31', size: '2.6 MB', status: 'Failed', statusColor: 'text-red-600', icon: 'fa-solid fa-file-alt', color: 'bg-blue-100' },
  ];

  getCategoryIcon(category: string): string {
    const map: { [key: string]: string } = {
      'Groceries': 'fa-cart-shopping',
      'Salary': 'fa-wallet',
      'Entertainment': 'fa-film',
      'Transport': 'fa-car',
      'Transfer': 'fa-arrow-right-arrow-left',
      'default': 'fa-bag-shopping'
    };
    return map[category] || map['default'];
  }

  getIconStyles(type: 'credit' | 'debit' | 'transfer') {
    switch (type) {
      case 'credit': return { bg: 'bg-green-100', text: 'text-green-600' };
      case 'debit': return { bg: 'bg-red-50', text: 'text-red-500' };
      case 'transfer': return { bg: 'bg-blue-50', text: 'text-blue-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-500' };
    }
  }

  openTransaction(type: string) {
    this.transactionType = type;
    this.showAddTransaction = true;
  }

  closeAddTransaction() {
    this.showAddTransaction = false;
  }

  saveTransaction(payload: TransactionPayload) {
    console.log(payload);
  }
}
