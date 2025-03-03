import React, { useState } from "react";
import { entriesArr } from "../assets/mockData";
import Card from "./Card";

const Main = () => {
  const [cards, setCards] = useState(entriesArr);
  const [showCardModal, setShowCardModal] = useState(false);

  //console.log("cards", cards);

  const toggleShow = (id) => {
    console.log(`Show Card ${id}`);
    setShowCardModal((prevShow) => !prevShow);
  };

  const displayCards = cards.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      toggleShow={toggleShow}
      showCardModal={showCardModal}
      card={item}
    />
  ));

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {displayCards.length > 0 ? displayCards : <p>No Info Available</p>}
      </main>
    </>
  );
};

export default Main;
