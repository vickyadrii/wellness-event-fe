import { Header } from "@/components/common/Header";
import { DashboardTable } from "./DashboardTable";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
