import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'



class BooksApp extends React.Component {
  state = {
    books: [],
    number: 1,
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }


  componentDidMount() {
      BooksAPI.getAll()
        .then((books)=> {
          this.setState(()=> ({
            books
          }))
        })
  }

  handleChange = (event, id) => {

    const books = this.state.books.map(book => {
      if (book.id === id) {
        return {...book, shelf: event.target.value };
      }
      return book;
    })
    this.setState({ books });

  }

//   const cars = this.state.cars.map(car => {
//     if(car.id === id) {
//         return { ...car, shelf: event.target.value };
//     }
//     return car;
// });
// this.setState({ cars });

//prevState.books.filter((book) => {{book.id === id}
  changeNumber=()=>{
    this.setState((prevState)=>{
      console.log(prevState);
      return {
        number :  prevState.number + 1
      }
    });
  }



  render() {
    // console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (

          <div className="list-books">
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                                handleChange={this.handleChange}
                                changeNumber={this.changeNumber}
                                update={this.handleChange}
                                books={this.state.books.filter((book) => 'currentlyReading' === book.shelf)} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                                handleChange={this.handleChange}
                                update={this.handleChange}
                                books={this.state.books.filter((book) => 'wantToRead' === book.shelf)} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                                handleChange={this.handleChange}
                                update={this.handleChange}
                                books={this.state.books.filter((book) => 'read' === book.shelf)} />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
