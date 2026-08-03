interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  joinedDate: string;
}

const customers: Customer[] = [
  { id: 'CUST-001', name: 'Rahul Verma', email: 'rahulverma@email.com', phone: '+91 98765 43210', status: 'Active', joinedDate: '12 May 2024' },
  { id: 'CUST-002', name: 'Priya Singh', email: 'priyasingh@email.com', phone: '+91 91234 56789', status: 'Active', joinedDate: '10 May 2024' },
  { id: 'CUST-003', name: 'Amit Kumar', email: 'amitkumar@email.com', phone: '+91 99887 66554', status: 'Inactive', joinedDate: '08 May 2024' },
  { id: 'CUST-004', name: 'Neha Patel', email: 'nehapatel@email.com', phone: '+91 98711 22334', status: 'Active', joinedDate: '05 May 2024' },
  { id: 'CUST-005', name: 'Vikram Joshi', email: 'vikramjoshi@email.com', phone: '+91 90123 44556', status: 'Active', joinedDate: '03 May 2024' },
];

function StatusBadge({ status }: { status: Customer['status'] }) {
  return <span className={`status-badge status-badge--${status.toLowerCase()}`}>{status}</span>;
}

function CustomersTable() {
  return (
    <div className="table-card">
      <div className="table-card__header">
        <h2 className="table-card__title">Recent Customers</h2>
        <a href="#" className="table-card__link">View All</a>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <div className="customer-cell">
                    <span className="customer-avatar">{customer.name.charAt(0)}</span>
                    <div className="customer-info">
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-id">{customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="cell-email">{customer.email}</td>
                <td className="cell-phone">{customer.phone}</td>
                <td><StatusBadge status={customer.status} /></td>
                <td className="cell-date">{customer.joinedDate}</td>
                <td>
                  <div className="cell-actions">
                    <button className="action-btn" title="Edit" aria-label="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </button>
                    <button className="action-btn action-btn--danger" title="Delete" aria-label="Delete">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                    <button className="action-btn" title="View" aria-label="View">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-card__footer">
        <span className="table-info">Showing 1 to 5 of 20 entries</span>
        <div className="pagination">
          <button className="page-btn page-btn--disabled">‹</button>
          <button className="page-btn page-btn--active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">›</button>
        </div>
      </div>
    </div>
  );
}

export default CustomersTable;