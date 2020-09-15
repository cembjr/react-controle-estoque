import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import Routes from "./routes";
import { AuthProvider } from "./Context/AuthContext";

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
