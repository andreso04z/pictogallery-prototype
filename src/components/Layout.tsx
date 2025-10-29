import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
