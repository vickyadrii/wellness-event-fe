import { Header } from "@/components/common/Header";
import { DashboardTable } from "./DashboardTable";
import { useEffect, useState } from "react";
import { api } from "@/configs";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const handleGetEvents = async () => {
    try {
      const res = await api.get("/api/events");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <div>
      <Header title="Dashboard" />
      <DashboardTable dataSource={data} />
    </div>
  );
};

export default Dashboard;
