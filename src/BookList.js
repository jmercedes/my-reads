import React, { Component} from 'react'

class BookList extends Component {

  render(){
    //console.log('Props', this.props.books)

    return(

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url('+book.imageLinks.smallThumbnail+')'}}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>

                      {
                          //if (book.shelf === 'currentlyReading') {book.title}
                          //else if(book.shelf === 'wantToRead') {book.title}
                          //else {book.title}
                          book.shelf === 'currentlyReading'
                          ? console.log(book.title)
                          : console.log(book.title)
                      }

                    </div>
                  </li>
                ))}

                </ol>
              </div>
            </div>
          </div>
        </div>

     </div>
    )
  }
}

export default BookList


// si book.self === 'currentlyReading'
//    entonces muestra los elmentos que se encuentren en el estante currentlyReading
// del lo contrario si es wantToRead
//      ...
// de lo contrario
//  Read
