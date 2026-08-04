import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AgeVerification from "./AgeVerification";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gc-bg">
      <Header />
      <AgeVerification />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}