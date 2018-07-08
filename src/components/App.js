import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Header from './Header'
import BookShelf from './BookShelf'
import Search from './Search'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: [],
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

  handleBooks = (books) => {
    this.setState(() => ({
      books,
    }))
  }


  handleChange = (event, id) => {

    const shelf = event.target.value

    BooksAPI.update({id}, shelf)
      .then((obj) => {
        const books = this.state.books.map((book) => {
          if (book.id === id) { book.shelf = shelf }
          return book
        })
        this.handleBooks(books)
      })
      .catch(error => this.setState(() => ({ error })))
    }








  render() {
    return (
      <div className="app">

           <Route path="/search" render={() =>  (
                  <Search books={this.state.books} handleChange={this.handleChange} />
              )}/>


           <Route exact path="/" render={()=> (
              <div>
               <Header/>
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
                   <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>

                 </div>
               </div>
              </div>
             )} />
      </div>
    )
  }
}

export default BooksApp
