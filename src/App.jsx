import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Cards';
import { nanoid } from "nanoid";

const App = () => {
  const [showContainer, setShowContainer] = useState(false);
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };
  return (
    <div className=" ">
      <Header
        faSearch={faSearch}
        FontAwesomeIcon={FontAwesomeIcon}
      />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card_data) => {
          return <Card
            key={nanoid()}
            title={card_data.title}
            category={card_data.category}  
            textContent={card_data.textContent}
            time={card_data.time}
          />;
        })}
      </div>

      <Footer
        showContainer={showContainer}
        toggleContainer={toggleContainer}
        addCard={addCard}
      />
    </div>
  );
};

export default App;
