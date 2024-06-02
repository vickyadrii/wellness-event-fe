import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { SidebarItems } from "@/constants";
import { SidebarItem } from "./SidebarItem";
import { LogOut } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div
      className={cn(
        "flex h-full lg:w-64 lg:fixed left-0 top-0 px-4 border-r-2 flex-col justify-between py-8",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="pl-4 flex items-center gap-x-3">
          <Link to="/dashboard">
            <h1 className="text-green-500 text-xl font-bold">Wellness Event</h1>
          </Link>
        </div>

        <div className="flex flex-col gap-y-2 w-full">
          {SidebarItems.map((data, index) => (
            <SidebarItem key={index} icon={<data.icon />} href={data.href} label={data.label} />
          ))}
        </div>
      </div>

      <div className="">
        <Button variant="danger" onClick={handleLogout} className="flex items-center gap-2 justify-end">
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
};
