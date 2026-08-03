interface StatCardData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

const stats: StatCardData[] = [
  {
    label: 'Total Customers',
    value: '12,458',
    change: '8.2% from last month',
    trend: 'up',
    color: '#2563eb',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Pending Orders',
    value: '9,682',
    change: '6.1% from last month',
    trend: 'up',
    color: '#7c3aed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    label: 'Open Tickets',
    value: '18,765',
    change: '12.57% from last month',
    trend: 'down',
    color: '#f59e0b',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    ),
  },
  {
    label: 'Total Revenue',
    value: '£2.45M',
    change: '+15.3% from last month',
    trend: 'up',
    color: '#10b981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

function StatCards() {
  return (
    <section className="stat-cards">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <div className="stat-card__top">
            <span className="stat-card__icon" style={{ background: `${stat.color}1a`, color: stat.color }}>
              {stat.icon}
            </span>
            <span className={`stat-card__trend ${stat.trend === 'up' ? 'stat-card__trend--up' : 'stat-card__trend--down'}`}>
              {stat.change}
            </span>
          </div>
          <div className="stat-card__value">{stat.value}</div>
          <div className="stat-card__label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

export default StatCards;