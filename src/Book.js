import React, {Component} from 'react'

class Book extends Component{

  state = {

  }

  handleChange = (event) => {
    console.log("value has changed")
  }

  render(){

    return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ this.props.thumbnail +')' }}></div>
                <div className="book-shelf-changer">
                  <select value={this.props.bookshelf} onChange={this.handleChange} >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.author}</div>
              </div>
    );
  }
};

export default Book



// const Book = (props) => {
//
//   console.log(props.bookshelf)
//
// const handleChange = () => {
//   console.log('Click happended')
// }
//   return (
//           <div className="book">
//             <div className="book-top">
//               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ props.thumbnail +')' }}></div>
//               <div className="book-shelf-changer">
//                 <select value={props.bookshelf} onChange={this.handleChange} >
//                   <option value="none" disabled>Move to...</option>
//                   <option value="currentlyReading">Currently Reading</option>
//                   <option value="wantToRead">Want to Read</option>
//                   <option value="read">Read</option>
//                   <option value="none">None</option>
//                 </select>
//               </div>
//             </div>
//             <div className="book-title">{props.title}</div>
//             <div className="book-authors">{props.author}</div>
//             </div>
//   );
// };
//
// export default Book
