import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./SearchBar";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import Loading from "./loading/loading";
import useBooks from "./hooks/useBooks";

const App = () => {
  const initialTerm = "JavaScript";
  const [loading, error, books, search] = useBooks(initialTerm);
  const [book, setBook] = useState(null);

  const onClick = (book) => {
    setBook(book);
  };

  useEffect(() => {
    if (books.length) {
      setBook(books[0].volumeInfo);
    }
  }, [books]);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="alert alert-warning">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-8">
          <BookDetails book={book} />
        </div>
        <div className="col-4">
          <BookList books={books} onClick={onClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialTerm={initialTerm} />
      {renderContent()}
    </div>
  );
};

export default App;
