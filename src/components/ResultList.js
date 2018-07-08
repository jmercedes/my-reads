import React from 'react'
import Book from './Book'



const ResultList = (props) => {

  

  console.log(props.handleChange)
  const options = props.results.length > 1
    ? props.results.map(r => ( <li key={r.id}><Book
                                                title={r.title}
                                                author={r.authors}
                                                thumbnail={
                                                  r.imageLinks !== null && r.imageLinks !== 0 && r.imageLinks
                                                    ? r.imageLinks.smallThumbnail
                                                    : 'url(../icons/book-cover-placecholder.svg)'
                                                }
                                                handleChange={props.handleChange}
                                              />
                                </li> ))
    : <li>Input search criteria</li>
  return <ol className="books-grid">{options}</ol>

}

export default ResultList
