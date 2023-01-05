import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";
import SelectedMovie from "./SelectedMovie";

const Index = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<SelectedMovie />} />
        </Routes>
      </HashRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
