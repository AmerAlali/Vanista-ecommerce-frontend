"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-96px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
