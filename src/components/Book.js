import React, {Component} from 'react'

class Book extends Component {
  render() {
    const {book, onShelfUpdate} = this.props
    console.log(this.props)
    const URL = book.imageLinks !== null && book.imageLinks !== 0 && book.imageLinks
                                   ? book.imageLinks.smallThumbnail
                                   : 'url(../icons/book-cover-placecholder.svg)'


    return (
      <li className="book">
      	<div className="book-top">
      	  <div className="book-cover"
        		style={{ width: 128, height: 193, backgroundImage: `url(${URL})`}}>
		      </div>
          <div className="book-shelf-changer">
      		<select value={book.shelf} onChange={e => onShelfUpdate(book, e.target.value)}>
      		  <option value="moveTo" disabled>Move to...</option>
		      <option value="currentlyReading">Currently Reading</option>
      		  <option value="wantToRead">Want to Read</option>
		      <option value="read">Read</option>
		      <option value="none">None</option>
	        </select>
          </div>
		  <div className="book-title">{book.title ? book.title : ''}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    )
  }
}



export default Book
