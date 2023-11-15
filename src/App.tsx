import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./layouts/layout";
import Main from "./components/Main";
import Detail from "./components/Detail";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
