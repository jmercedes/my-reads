import React, {Component} from 'react'

class Book extends Component{

  changeNumber=()=> {
    this.props.changeNumber();//call child method
  }

  handleChange = (event) => {
    let id = this.props.id;
    this.props.handleChange(event, id);
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



// const Book = (book, update) => {
//
//   //console.log(update(1))
//
// // const handleChange = () => {
// //   console.log('Click happended')
// // }
//
//   return (
//           <div className="book">
//             <div className="book-top">
//               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ book.thumbnail +')' }}></div>
//               <div className="book-shelf-changer">
//                 <select value={book.shelf} onChange="..." >
//                   <option value="none" disabled>Move to...</option>
//                   <option value="currentlyReading">Currently Reading</option>
//                   <option value="wantToRead">Want to Read</option>
//                   <option value="read">Read</option>
//                   <option value="none">None</option>
//                 </select>
//               </div>
//             </div>
//             <div className="book-title">{book.title}</div>
//             <div className="book-authors">{book.author}</div>
//             </div>
//   );
// };
//
// export default Book
