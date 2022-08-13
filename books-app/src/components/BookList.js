import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return (
    <div>
      {props.books.map((book) => (
        <Book key={book.id} book={book.volumeInfo} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default BookList;
