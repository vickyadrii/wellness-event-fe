import { Header } from "@/components/common/Header";
import { DashboardTable } from "./DashboardTable";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
