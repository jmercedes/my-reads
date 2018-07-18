import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class ShelfRow extends Component {
  render() {

    const { shelfTitle, books, onShelfUpdate} = this.props
    return (
      <div className="bookshelf">
        <h1 className="bookshelf-title">{ shelfTitle }</h1>
      	<hr />
          <div className="bookshelf-books">
        	  <ul className="books-grid">
              {books.length > 0 ? (books.map((book, index) => (
                <Book
                  key={index}
                  book={book}
                  onShelfUpdate={onShelfUpdate}
        		  />
              )))
    			    : (<p>...</p>)
              }
    		  </ul>
        </div>
      </div>
    )
  }
}

ShelfRow.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onShelfUpdate: PropTypes.func
}

export default ShelfRow
