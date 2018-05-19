import React from 'react'
import Book from './Book'

const ResultList = (props) => {
  const options = props.results.length !== 0
    ? props.results.map(r => ( <li key={r.id}><Book
                                                      title={r.title}
                                                      author={r.authors}
                                                      thumbnail={r.imageLinks.smallThumbnail}
                                                      //handleChange={this.props.handleChange}
                                              />
                                </li> ))
    : <li>Input your query</li>

  console.log(props.results)
  return <ol className="books-grid">{options}</ol>
}

export default ResultList
