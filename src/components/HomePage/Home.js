import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import useStore from "../store/store";

const Home = () => {
  const {
    books,
    query,
    isButtonClicked,
    setQuery,
    setIsButtonClicked,
    addToWishlist,
    setBooks,
  } = useStore();

  const API_KEY = "AIzaSyAXRHENch-ChXJQwto1QPeTQQWRUwt5mpI";

  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchClick = () => {
    setIsButtonClicked(true);
    searchBooks();
  };

  return (
    <div>
      <h1>Поиск книг</h1>
      <div className="link">
        <Link to="/wishlist">Список любимых книг</Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск книг"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Поиск
        </button>
      </div>
      <div className="book-results">
        {isButtonClicked &&
          books.map((book) => (
            <div className="bookContainer" key={book.id}>
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt=""
                  className="book-image"
                />
              )}
              <h2 className="book-title">{book.volumeInfo.title}</h2>
              <button
                className="likedBookButton"
                onClick={() => addToWishlist(book)}
              >
                Добавить в список любимых
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
