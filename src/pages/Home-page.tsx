import React, { useState } from "react";
import { FC } from "react";
import SearchPrompt from "../global-components/search-prompt/Search-prompt";

const HomePage = ()=>{
    return <>
    <h1>Home Page</h1>
    <SearchPrompt></SearchPrompt>
    <h1>Resultados:</h1>

    </>
}


export default HomePage;