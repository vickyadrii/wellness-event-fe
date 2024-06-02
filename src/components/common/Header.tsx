import { Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className="pb-3 flex items-center justify-between border-b-2 mb-5">
      <Button variant="ghost" asChild>
        <Link to="/dashboard" className="flex items-center gap-3">
          <ArrowLeft className="h-5 w-5 text-neutral-400" />
        </Link>
      </Button>
      <h1 className="font-semibold lg:text-lg text-neutral-400">{title}</h1>
    </div>
  );
};
