import React from "react";
import { Switch } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ProdutosPage } from "../pages/Produtos";
import { LoginPage } from "../pages/Login";
import Route from "./Route";
import { RegistroPage } from "../pages/Registro";

const Routes: React.FC = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/registro" component={RegistroPage} />
      <Route path="/produtos" component={ProdutosPage} isPrivate />
    </Switch>
  </div>
);

export default Routes;
