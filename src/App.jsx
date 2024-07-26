import React from "react";
import Navbar from "./components/navbar/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import "./index.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
    </>
  );
}

export default App;
