import React from "react";
import Navbar from "./components/navbar/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import Hero from "./components/hero/Hero";
import "./index.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      <Hero />
    </>
  );
}

export default App;
