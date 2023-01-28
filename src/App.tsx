import React from "react";
import "./App.css";
import { MobileView } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./pages/start/Start";

function App() {
  return (
    <MobileView>
      <BrowserRouter>
        <Routes>
          <Route path = "start" element = {<Start/>}/>
        </Routes>
      </BrowserRouter>
    </MobileView>
  );
}

export default App;
