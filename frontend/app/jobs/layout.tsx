"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import { useRouter } from "next/navigation";
import { getToken } from '../utils/Auth';

export interface LayoutProps {
  children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push('/auth');
  }
  
  return (
    <div className="bg-gray-300">
      <Header />
      <Navbar />
      {/* <Breadcrumbs /> */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;