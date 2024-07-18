import React from "react";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
