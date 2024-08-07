import { createContext, useState, useContext } from "react";

export const SidebarContext = createContext();

export const useSidebar = () => {
  const sidebar = useContext(SidebarContext);
  return sidebar;
};

export function SidebarProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle("noscroll", !sidebarOpen);
  }

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
