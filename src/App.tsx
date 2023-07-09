import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AppState } from "./global-interfaces/global-state.interface";
import { title } from "process";

//Create and export de context
export const AppContext = createContext<AppState | undefined>(undefined);

function App() {
  const [appTitle, setAppTitle] = useState<string>("Weather App");
  useEffect(()=>{document.title= appTitle;}, [appTitle]);
  
  return (
    <BrowserRouter>
      <CssBaseline>
        <AppContext.Provider value={{appTitle: appTitle, updateAppTitle: (newTitle: string)=>{setAppTitle(newTitle)}}}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Home</h2>
                </>
              }
            />
            <Route path="/*" element={<>Page not found</>} />
          </Routes>
        </AppContext.Provider>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
