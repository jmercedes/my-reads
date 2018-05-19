import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ResultList from './ResultList'
import { Link } from 'react-router-dom'

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

    console.log(this.state.results)
    return (
      <div> // container div

      <div className="search-books">
        <div className="search-books-bar">
            <Link exact="true" to='/' className="close-search" >Close</Link >
            <div className="search-books-input-wrapper">
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                <form>
                  <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                  />
                </form>
              </div>
            </div>
        </div>
      </div>

      <div className="list-books results-body">
        <div className="list-books">
          <div className="list-books-content">
              <ResultList results={this.state.results} />
          </div>
        </div>
      </div>

      </div> // End of container

    )
  }
}

export default Search
