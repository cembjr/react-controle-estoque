import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProdutosPage } from "./pages/Produtos";
import { LoginPage } from "./pages/Login";

const Routes: React.FC = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/produtos" component={ProdutosPage} />
    </Switch>
  </div>
);

export default Routes;
