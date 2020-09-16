import React from "react";

interface ButtonDefaultProps {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  onClick?: any
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  value,
  type,
  onClick
}) => {
  return (
    <button type={type || "button"} className="btn btn-primary" onClick={onClick}>
      {value}
    </button>
  );
};
