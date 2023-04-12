import React from "react";

// import { Router } from "react-router-dom";
import Router from "./Router";
import HeightSetter from "./components/Helpers/HeightSetter";

import "./styles/main.scss"

function App(){
  return(
    <>
      <Router />
      <HeightSetter/>
    </>
  )
}
export default App