import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="pb-3 flex items-center justify-between border-b-2 mb-5">
      <Button onClick={handleGoBack} variant="ghost" className="flex items-center gap-3">
        <ArrowLeft className="h-5 w-5 text-slate-400" />
      </Button>
      <h1 className="font-semibold lg:text-lg text-slate-400">{title}</h1>
    </div>
  );
};
