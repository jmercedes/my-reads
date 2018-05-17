import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'



class BooksApp extends React.Component {
  state = {
    books: [],
    selected: 'xJ',
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

  handleChange = (id) => {
    console.log(id + " value has changed")
  }

  changeNumber=()=>{
    this.setState((prevState)=>{
      console.log(prevState);
      return {
        number :  prevState.number + 1
      }
    });
  }


  // moveBook = (book) => {
  //   this.setState((currentState) => ({
  //     books: currentState.books.filter((b) => {
  //       //return c.id !== contact.id
  //       console.log('function is being invoked')
  //     })
  //   }))
  //   BooksAPI.update(book)
  // }

  // handleChange = (event) => {
  //   console.log("value has changed")
    //console.log(this.props.id)
    // this.setState({
    //   book:
    // })
    //BooksAPI.update(this.props, this.props.id)
  //}

  // handleClick = (ev) => {
  //       if (ev.keyCode === 13) {
  //           console.log('Enter!');
  //       }
  //   }




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
                    <BookShelf changeNumber = {this.changeNumber} update={this.handleChange} books={this.state.books.filter((book) => 'currentlyReading' === book.shelf)} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf update={this.handleChange} books={this.state.books.filter((book) => 'wantToRead' === book.shelf)} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf update={this.handleChange} books={this.state.books.filter((book) => 'read' === book.shelf)} />
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
