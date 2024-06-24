import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import backgroundImg from './utils/books-on-orange-bg-backgrounds-for-powerpoint.jpg'; // Import your image

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f3f4f6', // Fallback color if the image fails to load
      }}
    >
      <div className="  bg-gray-200 bg-opacity-55">
        <div className='bg-red-400 text-white p-4 text-center font-bold flex items-center justify-center'>
          BookStore
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBooks />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
