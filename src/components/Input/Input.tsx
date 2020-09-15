import React from "react";

interface InputProps {
  type?: string;
  label: string;
  onChange: any;
  value: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  value,
  id
}) => {
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <input
        type={type || "text"}
        className="form-control"
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};
