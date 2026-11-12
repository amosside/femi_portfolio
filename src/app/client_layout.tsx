"use client";

import Topbar from "../app/components/topbar";
import Footer from "../app/components/footer";
import GlobalRouteLoader from "./components/global-route-loader";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">
      {/* Floating Topbar */}
      <Topbar />

      {/* Main Content */}
      <main className="flex-grow pt-20 lg:p-6 lg:pt-20 md:p-4 md:pt-20 p-0 bg-slate-200">
        <GlobalRouteLoader />
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
