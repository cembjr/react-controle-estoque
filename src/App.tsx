import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { AuthProvider } from "./Context/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Menu />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
