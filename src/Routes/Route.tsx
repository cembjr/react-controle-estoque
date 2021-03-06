import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const usuarioLogado = !!useAuth().usuarioLogado;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {

        return isPrivate && usuarioLogado ? (
          <Component />
        ) : isPrivate && !usuarioLogado ? (
          <Redirect to={{ pathname: "/login" }} />
        ) :  <Component />          
      }}
    />
  );
};

export default Route;
