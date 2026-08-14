import type { StatCardData } from '../types/dashboard';

export const DASHBOARD_STATS: StatCardData[] = [
  {
    label: 'Total Customers',
    value: '12,458',
    change: '8.2% from last month',
    trend: 'up',
    color: '#2563eb',
    iconKey: 'customer',
  },
  {
    label: 'Pending Orders',
    value: '9,682',
    change: '6.1% from last month',
    trend: 'up',
    color: '#7c3aed',
    iconKey: 'order',
  },
  {
    label: 'Open Tickets',
    value: '18,765',
    change: '12.57% from last month',
    trend: 'down',
    color: '#f59e0b',
    iconKey: 'ticket',
  },
  {
    label: 'Total Revenue',
    value: '£2.45M',
    change: '+15.3% from last month',
    trend: 'up',
    color: '#10b981',
    iconKey: 'revenue',
  },
];
