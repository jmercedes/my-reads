import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

const queryInitalValue = ''

class Search extends Component {
  state = {
    query: queryInitalValue,
    results: []
  }

  componentDidMount() {
    const { query } = this.state
    this.getBooks(query)
  }

  setSearchBook = (query) => {
    this.setState(() => ({
      query, // call render method
    }))
  }

  getBooks = (e) => {
  BooksAPI.search(e)
    .then((query) => {
      this.setSearchBook(query)
      console.log(query)
    })
    .catch(error => this.setState(() => ({ error })))
}


  updateQuery = (query) => {
    this.getBooks(query)
    this.setState(() => ({
      query: query.trim()
    }))
    //console.log(this.state.query)
  }

  // const getBooks = (this.state.query) => {
  //   BooksAPI.search(this.state.query)
  //     .then((books) => {this.setState({this.state.result: books })})
  // }

  render(){

    // const showBooks = this.state.query === ''
    //       ?   this.state.results
    //       :   this.props.books.filter((book) => (book.title.toLowerCase().includes(this.state.query.toLowerCase)))

    return (
      <div>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value) }
        />
        </div>



        <ol className="books-grid">
        </ol>
        </div>

    )
  }
}

export default Search
