export interface TransactionPayload {
  type: string;
  amount: number;
  transactionAt: string;
  category: string;
  fromAccount: string;
  toAccount: string;
  description: string;
}
