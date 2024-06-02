import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="max-w-2xl mx-auto flex min-h-screen text-slate-800">
      <div className="flex-1 flex flex-col items-center justify-center">{children}</div>
      <Toaster />
    </main>
  );
};

export default AuthLayout;
