import React, { Component } from 'react'

class Book extends Component {


  state = {
    selectValue: 'Radish'
  }


  onChangeValue = (event) => {
    this.setState((prevState) => {
      console.log('Estado previo ' + prevState.selectValue)
      return prevState.selectValue = event.target.value //"JJ"
    })
  }
  render() {

    return (

      <div>
        <select
          value={this.state.selectValue}
          onChange={this.onChangeValue}
        >
         <option value="Orange">Orange</option>
          <option value="Radish">Radish</option>
          <option value="Cherry">Cherry</option>
        </select>
        <p>{this.state.selectValue}</p>
      </div>

    )
  }
  //var message='You selected '+this.state.selectValue;
}


export default Book
