import React from "react";
import { LayoutUI } from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutUI.BackgroundContainer>
      <LayoutUI.ApplicationContainer>{children}</LayoutUI.ApplicationContainer>
    </LayoutUI.BackgroundContainer>
  );
}

export default Layout;
