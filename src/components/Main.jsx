import React, { useState, useEffect } from "react";
import DisplayModal from "./DisplayModal";
import { entriesArr } from "../assets/mockData";
import Card from "./Card";

const Main = () => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [storedCards, setCards] = React.useState(entriesArr);

/*   useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setCards(storedCards);
  }, []); */
 
  const toggleShow = (card) => {
    console.log(`Show Card ${card}`);
    setSelectedCard(card);
    setShowCardModal(prevShow => !prevShow);
  };

  const handleClose = () => {
    setShowCardModal(prevShow => !prevShow);
    setSelectedCard(null);
  };


  const displayCards = storedCards.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      toggleShow={() => toggleShow(item)}
      card={item}
    />
  ));

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {displayCards.length > 0 ? displayCards : <p>No Info Available</p>}
        
        {selectedCard && (
        <DisplayModal show={showCardModal} onClose={handleClose} card={selectedCard} />
      )}
      </main>
    </>
  );
};

export default Main;
