import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    
    <BrowserRouter>
      <CssBaseline>
        
          <Routes>
            <Route path="/" element={<><h2>Home</h2></>}/>
            <Route path="/*" element={<>Page not found</>}/>
          </Routes>
        
      </CssBaseline>
    </BrowserRouter>
    
  );
}

export default App;
