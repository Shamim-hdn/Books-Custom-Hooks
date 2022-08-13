import { useEffect, useState } from "react";
import axios from "axios";

const useBooks = (term) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=20`
      );
      setLoading(false);
      setBooks(response.data.items);
      setError(null);
    } catch (e) {
      setLoading(false);
      setBooks([]);
      setError(e.message);
    }
  };

  useEffect(() => {
    search(term);
  }, [term]);

  return [loading, error, books, search];
};

export default useBooks;
