import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AgeVerification from "./AgeVerification";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gc-bg text-white selection:bg-gc-accent selection:text-gc-dark font-sans">
      <Header />
      <AgeVerification />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}