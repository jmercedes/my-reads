import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ResultList from './ResultList'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

// ================================================



    handleInputChange = () => {
      this.setState({
        query: this.search.value
      }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
          }
        }
      })
    }

    getInfo = () => {
      BooksAPI.search(this.state.query)
        .then((books) => {
          this.setState({
            results: books
          })
        })
    }


//   componentDidMount() {
//     const { query } = this.state
//     this.getBooks(query)
//   }
//
//   setSearchBook = (query) => {
//     this.setState(() => ({
//       query, // call render method
//     }))
//   }
//
//   getBooks = (e) => {
//   BooksAPI.search(e)
//     .then((query) => {
//       this.setSearchBook(query)
//       console.log(query)
//     })
//     .catch(error => this.setState(() => ({ error })))
// }
//
//
//   updateQuery = (query) => {
//     this.getBooks(query)
//     this.setState(() => ({
//       query: query.trim()
//     }))
//     //console.log(this.state.query)
//   }

  // ================================================


  render(){

    // const showBooks = this.state.query === ''
    //       ?   this.state.results
    //       :   this.props.books.filter((book) => (book.title.toLowerCase().includes(this.state.query.toLowerCase)))
    console.log(this.state.results)
    return (
      <div>
        <div className="search-books-input-wrapper">
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <ResultList results={this.state.results} />
        </form>
        </div>


        <div>{this.state.query}</div>

        </div>

    )
  }
}

export default Search
