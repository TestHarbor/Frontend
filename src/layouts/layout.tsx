//import
import React from "react";
//components
import PCHeader from "./PC/Header";
import MoHeader from "./Mobile/Header"
import Nav from "./Nav";
import Footer from "./Footer";
import { PC, Mobile } from "../responsive";
import Search from "../components/Mobile/Search";
interface LayoutProps {
  children?: React.ReactNode;
  selectedTab: string;
  toggleSelect?: (data: ToggleSelectData) => void;
}
interface ToggleSelectData {
  data: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  selectedTab,
  toggleSelect,
}) => {
  return (
    <>
      <PC>
        <header>
          <PCHeader />
        </header>
        <Nav selectedTab={selectedTab} toggleSelect={toggleSelect} />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </PC>
      <Mobile>
        <header>
          <MoHeader/>
        </header>
        <Search/>
        <Nav selectedTab={selectedTab} toggleSelect={toggleSelect} />
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </Mobile>
    </>
  );
};

export default Layout;
