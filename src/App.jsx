import Navbar from "./components/navbar/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import Listing from "./components/listing/Listing";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import "./index.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      <Hero />
      <Banner />
      <Listing />
    </>
  );
}

export default App;
