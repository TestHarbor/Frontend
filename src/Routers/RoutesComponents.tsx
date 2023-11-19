//import
import React from "react";
import { Route, Routes } from "react-router-dom";
//components
import Main from "../components/Main";
import Detail from "../components/Detail";

interface RoutesComponentProps {
  selectedTab: string;
}

const RoutesComponent: React.FC<RoutesComponentProps> = ({ selectedTab }) => (
  <Routes>
    <Route path="/" element={<Main selectedTab={selectedTab} />} />
    <Route path="/Detail/:id" element={<Detail />} />
  </Routes>
);

export default RoutesComponent;