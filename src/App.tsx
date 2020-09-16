import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { AuthProvider } from "./Context/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
