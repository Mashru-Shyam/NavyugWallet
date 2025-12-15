export interface Reports {
  title: string;
  description: string;
  date: string | Date;
  size: string;
  status: 'Completed' | 'Pending' | 'Failed';
  statusColor: string;
  icon: string;
  color: string;
}
