import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'


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



  render() {
    // console.log(this.state.books)
    //onClick={() => this.setState({ showSearchPage: false })}
    //
    return (
      <div className="app">
        {this.state.showSearchPage
          ? ( <Route path="/search" render={() =>  (

                  <Search books={this.state.books} />

              )}/>
            )

         : ( <Route exact path="/" render={()=> (

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


             )} />
           )
      }
      </div>
    )
  }
}

export default BooksApp
