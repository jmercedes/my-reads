import React, {Component} from 'react'
import Book from './Book'




 class BookShelf extends Component {

   render(){

     return(
       <ol className="books-grid">
         { this.props.books.map((book) => (
           <li key={book.id}>
             <Book
                 title={book.title}
                 author={book.authors}
                 thumbnail={book.imageLinks.smallThumbnail}
                 shelf={book.shelf}
                 id={book.id}
                 changeNumber={this.props.changeNumber}
             />
           </li>
         ))}
       </ol>
     );
   };


   }

export default BookShelf



//  const BookShelf = ({books, update}) => {
//
//
//
//     return(
//       <ol className="books-grid">
//         { books.map((book) => (
//           <li key={book.id}>
//             <Book
//                 title={book.title}
//                 author={book.authors}
//                 thumbnail={book.imageLinks.smallThumbnail}
//                 shelf={book.shelf}
//                 id={book.id}
//                 update={update}
//             />
//           </li>
//         ))}
//       </ol>
//     );
// };
//
// export default BookShelf
