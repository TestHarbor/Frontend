import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
