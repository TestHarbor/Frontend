//import
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
import "./styles/App.scss";
//components
import Layout from "./layouts/layout";
import Main from "./components/Main";
import Detail from "./components/Detail";

interface ToggleSelectData {
  data: string;
}

function App() {
  const [selectedTab, setSelectedTap] = useState<string>("시험지");
  const toggleSelect = ({ data }: ToggleSelectData) => {
    setSelectedTap(data);
  };
  return (
    <>
      <Layout selectedTab={selectedTab} toggleSelect={toggleSelect}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Main selectedTab={selectedTab} />}
            ></Route>
            <Route path="/Detail/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
