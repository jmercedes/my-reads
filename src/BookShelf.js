import React from 'react'
import Book from './Book'


 const BookShelf = (props) => {

    //console.log(props.books)

    return(
      <ol className="books-grid">
        { props.books.map((book) => (
          <li key={book.id}>
            <Book
                title={book.title}
                author={book.authors}
                thumbnail={book.imageLinks.smallThumbnail}
                bookshelf={book.shelf}
            />
          </li>
        ))}
      </ol>
    );
};

export default BookShelf
