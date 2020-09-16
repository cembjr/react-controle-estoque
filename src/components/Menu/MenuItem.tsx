import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  to: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => (
  <li className="nav-item">
    <Link className="nav-link text-dark" to={to}>
      {children}
    </Link>
  </li>
);
