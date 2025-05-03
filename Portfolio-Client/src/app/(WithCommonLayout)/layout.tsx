import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen px-2 max-w-6xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
