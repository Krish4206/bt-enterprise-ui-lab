import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatCards from '../../components/dashboard/StatCards';
import CustomersTable from '../../components/dashboard/CustomersTable';

function Dashboard() {
  return (
    <div className="content-box">
      <DashboardHeader />

      <StatCards />
      <CustomersTable />
    </div>
  );
}

export default Dashboard;