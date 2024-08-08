import { Outlet } from "react-router-dom";
import Navebar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

import { SidebarProvider } from "../context/SidebarContext";

function SharedLayout() {
  return (
    <>
      <SidebarProvider>
        <Navebar />
        <Sidebar />
      </SidebarProvider>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default SharedLayout;
