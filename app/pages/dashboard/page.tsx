import React from "react";
import Card from "../../components/cards/cards";

const Dashboard: React.FC = () => {
  const cardsData = [
    { title: "Guide 1", description: "Description for Card 1" },
    { title: "Guide 2", description: "Description for Card 2" },
    { title: "Guide 3", description: "Description for Card 3" },
    { title: "Guide 4", description: "Description for Card 4" },
    { title: "Guide 5", description: "Description for Card 5" },
    { title: "Guide 6", description: "Description for Card 6" },
    { title: "Guide 7", description: "Description for Card 7" },
    { title: "Guide 8", description: "Description for Card 8" },
    { title: "Group Project", description: "Description for Card 9" },
  ];

  return (
    <div className="grid-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Dashboard;
