import React, { Component } from 'react'


class Search extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    console.log(this.state.query)
  }
  render(){
    return (

      //const { query } = this.state
      //const { books } = this.props

      <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event) => this.updateQuery(event.target.value) }
      />
    )
  }
}

export default Search
