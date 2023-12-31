import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AppState } from "./global-interfaces/global-state.interface";

import HomePage from "./pages/Home-page";
import PageNotFound from "./pages/Page-not-found";

import Banner from "./global-components/banner/Banner";
import SearchPrompt from "./global-components/search-prompt/Search-prompt";



//Create and export de context
export const AppContext = createContext<AppState | undefined>(undefined);

function App() {
  const [appTitle, setAppTitle] = useState<string>("Weather App");
  useEffect(()=>{document.title= appTitle;}, [appTitle]);
  
  return (
    <BrowserRouter>
      <CssBaseline>
        <AppContext.Provider value={{appTitle: appTitle, updateAppTitle: (newTitle: string)=>{setAppTitle(newTitle)}}}>
            <Banner></Banner>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
        </AppContext.Provider>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
