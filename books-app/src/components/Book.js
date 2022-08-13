import noImage from "../assets/images/no-image.png";

const Book = ({ book, onClick }) => {
  const clickHandler = () => {
    onClick(book);
  };

  return (
    <div>
      <div
        className="card mb-3"
        style={{ maxWidth: "100vw", cursor: "pointer" }}
        onClick={clickHandler}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={book.imageLinks ? book.imageLinks.thumbnail : noImage}
              className="img-fluid rounded-start"
              alt="cover"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                <small className="text-muted">{book.subtitle}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
