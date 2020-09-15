import React from "react";

interface ButtonDefaultProps {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  value,
  type,
}) => {
  return (
    <button type={type || "button"} className="btn btn-primary">
      {value}
    </button>
  );
};
