import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../utils/form-utils';
import { TransactionPayload } from '../../models/transaction-payload';


@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css',
})
export class AddTransaction implements OnInit {
  @Input() transactionType: string = 'expense';
  @Output() transactionSave = new EventEmitter<TransactionPayload>();
  @Output() closeModal = new EventEmitter<void>();

  transactionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      type: [this.transactionType, Validators.required],
      amount: ['', Validators.required],
      date: [new Date().toLocaleDateString('en-CA'), Validators.required],
      time: [new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }), Validators.required],
      category: [''],
      fromAccount: [''],
      toAccount: [''],
      description: [''],
    })
    this.configureTransactionForm();
  }

  isInvalid(name: string) {
    return FormUtils.isInvalid(this.transactionForm, name);
  }

  getError(name: string) {
    return FormUtils.getError(this.transactionForm, name);
  }

  configureTransactionForm() {
    if(this.transactionForm.get('type')?.value !== 'transfer') {
      this.transactionForm.get('category')?.setValue(this.getCategories()[0] || '');
    }
    const accounts = this.getAccounts();
    if(this.transactionForm.get('type')?.value === 'transfer') {
      this.transactionForm.get('fromAccount')?.setValue(accounts[0]);
      this.transactionForm.get('toAccount')?.setValue(accounts[1]);
    } else {
      this.transactionForm.get('toAccount')?.setValue(accounts[0]);
    }
  }

  setTransactionType(type: string) {
    this.transactionForm.get('type')?.setValue(type);
    this.configureTransactionForm();
  }

  getCategories(): string[] {
    const categoryMap: { [key:string]: string[] } = {
      'income': ['Salary', 'Business', 'Investment', 'Gift', 'Other'],
      'expense': ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Transport', 'Healthcare', 'Other'],
    }
    return categoryMap[this.transactionForm.get('type')?.value] || [];
  }

  getAccounts(): string[] {
    const accounts: string[] = ['Checking Account', 'Savings Account', 'Credit Card'];
    return accounts;
  }

  saveTransaction() {
    // this.transactionForm.markAllAsTouched();
    // if(this.transactionForm.invalid) return;
    const {date, time, ...rest} = this.transactionForm.value;
    const transactionAt = new Date(`${date}T${time}`).toISOString();
    const payload: TransactionPayload = {...rest, transactionAt};
    this.transactionSave.emit(payload);
    this.closeTransaction();
  }

  closeTransaction() {
    this.closeModal.emit();
  }
}

