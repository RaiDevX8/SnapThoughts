import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Cards';
import { nanoid } from "nanoid";
import NoNotesImage from './images/NONotes.png'; // Import the image using ES6 module syntax
import Pagination from './Pagination'; // Assuming you have a Pagination component

const App = () => {
  const [showContainer, setShowContainer] = useState(false);
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [cardsPerPage, setCardsPerPage] = useState(() => {
    const initialCardsPerPage = window.innerWidth < 768 ? 3 : 4;
    return initialCardsPerPage;
  });

  // Update cardsPerPage on window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = window.innerWidth < 768 ? 3 : (window.innerWidth < 992 ? 4 : 8);
      setCardsPerPage(newCardsPerPage);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const indexOfLastNote = currentPage * cardsPerPage;
  const indexOfFirstNote = indexOfLastNote - cardsPerPage;
  const currentNotes = cards.slice(indexOfFirstNote, indexOfLastNote);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  return (
    <div className="h-screen w-full ">
      <Header faSearch={faSearch} FontAwesomeIcon={FontAwesomeIcon} />
      {cards.length === 0 ? (
        <img
          className='image shadow-lg bg-transparent   w-full h-[30em] grayscale rounded-full object-contain flex justify-center items-center  '
          src={NoNotesImage}
          alt="img"
        />
      ) : (
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentNotes.map((card_data) => (
            <Card
              key={nanoid()}
              title={card_data.title}
              category={card_data.category}
              textContent={card_data.textContent}
              time={card_data.time}
              goToNextPage={goToNextPage}
              goToPrevPage={goToPrevPage}
            />
          ))}
        </div>
      )}
      {cards.length !==0 &&  
       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />}
    
      <Footer
        showContainer={showContainer}
        toggleContainer={toggleContainer}
        addCard={addCard}
      />
    </div>
  );
};

export default App;
