import noImage from "../assets/images/no-image.png";
import DOMPurify from "dompurify";

const BookDetails = ({ book }) => {
  if (book) {
    const cleanedHTML = DOMPurify.sanitize(book.description);
    return (
      <div className="card">
        <img
          src={book.imageLinks ? book.imageLinks.thumbnail : noImage}
          className="card-img-top"
          alt="cover"
        />
        <div className="card-body">
          <h3 className="card-title">{book.title}</h3>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: cleanedHTML }}
          ></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Categories: {book.categories}</li>
          <li className="list-group-item">Language: {book.language}</li>
          <li className="list-group-item">
            Authors: {book.authors ? book.authors.join(", ") : "UNKNOWN"}
          </li>
          <li className="list-group-item">Publisher: {book.publisher}</li>
        </ul>
      </div>
    );
  }
};

export default BookDetails;
