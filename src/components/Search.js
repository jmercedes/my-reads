import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import ResultList from './ResultList'
import { Link } from 'react-router-dom'
import Book from './Book'


class Search extends Component {
  state = {
    books: [],
    booksOnDisplay: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then(allBooks => {
      this.setState({
    	   booksOnDisplay: allBooks.filter(book => book.shelf !== 'none')
	    })
  	})
  }

  updateQuery(query) {
    this.setState({ query })
  }

  onShelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
    const { books } = this.state
	  const updateIndex = books.findIndex(b => b.id === book.id)
    const updateBook = books[updateIndex]
    updateBook.shelf = shelf

    this.setState({
      books: [...books.slice(0, updateIndex), updateBook, ...books.slice(updateIndex + 1)]
    })
  }

  searchBooks(query) {
    const { booksOnDisplay } = this.state
	this.updateQuery(query)
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results && results.length > 0) {
          let searchResults = results
      	  searchResults.map((book) => book.shelf = 'none' )
      	  booksOnDisplay.map((book) => {
      		const updateIndex = searchResults.findIndex(s => s.id === book.id)
      		if (searchResults[updateIndex]) {
      		  searchResults[updateIndex].shelf = book.shelf
    		}
    	  })
          this.setState({ books: searchResults })
        } else {
          this.setState({ books: [] })
        }
      })
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
	const { books, query } = this.state

	return (
      <div className="search-books">
      	<div className="search-books-bar">
      	  <Link to="/" className="close-search" />
      	  <div className="search-books-input-wrapper">
            <input type="text" onChange={(e) => this.searchBooks(e.target.value)} />
      	  </div>
      	</div>
		<div className="search-books-results">
          <ul className="books-grid">
            {books.length > 0 ? (books.map((book, index) => (
              <Book
                key={index}
                book={book}
                onShelfUpdate={this.onShelfUpdate}
      		  />
            )))
  			: ( query.length === 0 ? (<p>Enter search criteria</p>) : (<p>Book not found</p>) )
            }
  		  </ul>
        </div>
      </div>
    )
  }
}

export default Search
