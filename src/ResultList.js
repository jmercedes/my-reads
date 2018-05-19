import React from 'react'

const ResultList = (props) => {
  const options = props.results.length !== 0
    ? props.results.map(r => ( <li key={r.id}> {r.title} </li> ))
    : <li>Input your query</li>

  console.log(props.results)
  return <ul>{options}</ul>
}

export default ResultList
