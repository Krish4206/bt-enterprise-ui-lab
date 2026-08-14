export interface StatCardData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  iconKey: 'customer' | 'order' | 'ticket' | 'revenue';
  color: string;
}
