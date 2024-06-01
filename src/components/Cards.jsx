import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm w-full mt-3 rounded-lg  shadow-md  overflow-hidden border-2 border-red-600 ">
      <header className="text-gray-100 p-4">
        <h2 className=" text-lg font-bold">Note Title</h2>
      </header>
      <div className="p-4">
        <p className="text-gray-700">
          This is the body of the note. It can contain any text or content related to the note.
        </p>
      </div>
      <footer className="p-4 text-gray-100 text-right flex justify-between items-center">
      <p className='text-gray-700 '>date</p>
         <span>personal</span>
        <button className="text-blue-500 hover:text-blue-700">Edit</button>
      </footer>
    </div>
  );
};

export default Card;
