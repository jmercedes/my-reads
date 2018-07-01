import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import ResultList from './ResultList'
import { Link } from 'react-router-dom'


const EMPTY_QUERY = ''

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
      if (this.state.query.length > 1) {
          this.getInfo()
      } else {
        this.setState({
          results: []
        })
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
        console.log(this.state.books)
      }



  // ================================================


  render(){

    console.log(this.state.results)
    return (
      <div> // container div

      <div className="search-books">
        <div className="search-books-bar">
            <Link to={{ pathname: '/', }} className="close-search" >Close</Link >
            <div className="search-books-input-wrapper">
              <div className="search-books-input-wrapper">
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
