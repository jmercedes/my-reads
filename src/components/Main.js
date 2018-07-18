import React from 'react'
import AddBook from './AddBook'
import Title from './Title'
import Shelf from './Shelf'


const Main = (props) => {
  return (
    <div className="main-page">
      <Title />
      <Shelf />
      <AddBook />
    </div>
  )
}

export default Main
