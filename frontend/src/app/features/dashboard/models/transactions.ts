export interface Transactions {
  id: number;
  description: string;
  amount: number;
  type: 'credit' | 'debit' | 'transfer';
  category: string;
  date: string;
}

