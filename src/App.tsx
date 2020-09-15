import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>    
      <Menu />      
      <Routes />
    </BrowserRouter>
  );
}

export default App;
