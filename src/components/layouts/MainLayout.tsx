import { Sidebar } from "@/components/common/Sidebar";
import { MobileHeader } from "@/components/common/MobileHeader";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-64 h-full pt-14 lg:pt-0">
        <div className="max-w-5xl mx-auto h-full p-5">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
