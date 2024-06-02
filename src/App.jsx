// App.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import your custom CSS file
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
  console.log(cards)
  return (
    <div className="h-screen w-full flex flex-col">
      <Header
        faSearch={faSearch}
        FontAwesomeIcon={FontAwesomeIcon}
      />

        {cards.map((card_data) => {
          return <Card
            key={nanoid()}
            title={card_data.title}
            category={card_data.category}  // Make sure category is passed
            textContent={card_data.textContent}
            time={card_data.time}
          />;
        })}

      <Footer
        showContainer={showContainer}
        toggleContainer={toggleContainer}
        addCard={addCard}
      />
    </div>
  );
};

export default App;
