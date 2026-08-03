import StatCards from '../../components/dashboard/StatCards';
import CustomersTable from '../../components/dashboard/CustomersTable';

function Dashboard() {
  return (
    <div className="content-box">
      <div className="page-header">
        <div>
          <h1 className="page-header__title">Customer Dashboard</h1>
          <p className="page-header__subtitle">Overview of customers, orders, tickets and revenue</p>
        </div>
        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          Add Customer
        </button>
      </div>

      <StatCards />
      <CustomersTable />
    </div>
  );
}

export default Dashboard;