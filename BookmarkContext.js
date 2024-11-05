import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (book) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, book]);
  };

  const removeBookmark = (bookId) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((book) => book.id !== bookId));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
