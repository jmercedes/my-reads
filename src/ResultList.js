import React, { Component} from 'react'
import Book from './Book'



const ResultList = (props, handleChange) => {

  const options = props.results.length !== 0
    ? props.results.map(r => ( <li key={r.id}><Book
                                                      title={r.title}
                                                      author={r.authors}
                                                      thumbnail={r.imageLinks.smallThumbnail}
                                                      handleChange={props.handleChange}
                                              />
                                </li> ))
    : <li>Input search criteria</li>

  console.log(props.results)
  return <ol className="books-grid">{options}</ol>
}

export default ResultList
