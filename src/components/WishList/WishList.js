// import React, { useState, useEffect } from 'react';
// import './WishList.css'

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   return (
//     <div>
//       <h1>Список любимых книг</h1>
//       <ul>
//         {wishlist.map((book) => (
//           <li key={book.id}>
//             <div>
//               {book.volumeInfo.imageLinks && (
//                 <img
//                   src={book.volumeInfo.imageLinks.thumbnail}
//                   alt={book.volumeInfo.title}
//                 />
//               )}
//               <h3>{book.volumeInfo.title}</h3>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Wishlist;

import React from "react";
import "./WishList.css";
import useStore from "../store/store";

const Wishlist = () => {
  const { wishlist } = useStore();

  return (
    <div>
      <h1>Список любимых книг</h1>
      <ul>
        {wishlist.map((book) => (
          <li key={book.id}>
            <div>
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <h3>{book.volumeInfo.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
