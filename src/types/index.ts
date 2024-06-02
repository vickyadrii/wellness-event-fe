import { User } from "./user";
import { ReactElement } from "react";

export type LoginContext = {
  data?: User;
  isAuthenticated?: boolean;
};

export type SidebarItemType = {
  label: string;
  href: string;
  icon: ReactElement;
};
