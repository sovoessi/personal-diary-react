import React, { useState } from "react";
import { entriesArr } from "../assets/mockData";
import Card from "./Card";
import DisplayModal from "./DisplayModal";

const Main = () => {
  const [cards, setCards] = useState(entriesArr);
  const [showCard, setShowCard] = useState(false);

  console.log("cards", cards);

  const toggleShow = () => {
    setShowCard((prevShow) => !prevShow);
  };

  const showModal = (id) => {
    console.log(`Show Card ${id}`);
  };

  const displayCards = cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      showModal={showModal}
      toggleShow={toggleShow}
      card={card}
    />
  ));

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {displayCards.length > 0 ? displayCards : <p>No Info Available</p>}
        {showCard && <DisplayModal toggleShow={toggleShow} />}
      </main>
    </>
  );
};

export default Main;
