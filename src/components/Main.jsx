import React, { useState } from "react";
// import { entriesArr } from "../assets/mockData";
import Card from "./Card";

const Main = () => {
  const [cards, setCards] = useState([]);
  console.log("cards", cards);

  const displayCards = cards.map((card) => <Card key={card.id} card={card} />);

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {displayCards.length > 0 ? displayCards : <p>No Info Available</p>}
      </main>
    </>
  );
};

export default Main;
