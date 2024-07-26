import React, { createContext, useState } from "react";

export const SidebarContext = createContext();
export const ToggleContext = createContext();

export function SidebarProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  return (
    <SidebarContext.Provider value={toggleSidebar}>
      <ToggleContext.Provider value={sidebarOpen}>
        {children}
      </ToggleContext.Provider>
    </SidebarContext.Provider>
  );
}
