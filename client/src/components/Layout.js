import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
