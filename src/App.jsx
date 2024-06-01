import React from 'react';
import Card from './components/Cards';

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <header className="h-16 p-4 pt-14  text-white flex justify-between items-center">
        <span className="text-5xl font-mono font-extrabold">Notes</span>
        <p>search</p>
      </header>
      <div className="flex-1 flex mb-52 pt-1 flex-col justify-center items-center p-4">
        <Card />
        <Card />
        {/* Add more Card components as needed */}
      </div>
      <div className="fixed bottom-10 text-white inset-x-0 flex justify-center">
        <button className="text-4xl pb-1  bg-yellow-300 h-[50px] w-[50px] rounded-full flex items-center justify-center shadow-lg">+</button>
      </div>
    </div>
  );
};

export default App;
