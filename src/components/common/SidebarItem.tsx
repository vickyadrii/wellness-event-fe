import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { SidebarItemType } from "@/types";

export const SidebarItem = ({ label, href, icon }: SidebarItemType) => {
  const location = useLocation();
  const isActiveSidebar = location.pathname === href;

  return (
    <div>
      <Button
        variant={isActiveSidebar ? "sidebarOutline" : "sidebar"}
        className="justify-start h-[52px] w-full"
        asChild
      >
        <Link to={href} className="flex items-center gap-2">
          {icon}
          {label}
        </Link>
      </Button>
    </div>
  );
};
