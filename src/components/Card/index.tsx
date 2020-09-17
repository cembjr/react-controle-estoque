import React from "react";

interface CardProps {
  titulo: string;
  width?: string;
}

export const Card: React.FC<CardProps> = ({ titulo, width, children }) => {
  return (
    <section
      className="section-conten padding-y container"
      style={{
        maxWidth: width || "500px",
        marginTop: "20px",
      }}
    >
      <div className="card mx-auto">
        <div className="card-body">
          <h4 className="card-title mb-4">{titulo}</h4>
          {children}
        </div>
      </div>
    </section>
  );
};
