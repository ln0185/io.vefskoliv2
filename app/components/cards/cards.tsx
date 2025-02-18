import React from "react";
import "./styles.css";
interface CardProps {
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
