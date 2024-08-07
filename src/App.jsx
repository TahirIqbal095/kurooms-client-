import Navbar from "./components/navbar/Navbar";
import Listing from "./components/listing/Listing";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";

import { SidebarProvider } from "./context/SidebarContext";

import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <Hero />
      <Banner />
      <Listing />
      <Footer />
    </>
  );
}

export default App;
