import React from "react";

export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg";
   let book2 = "https://ew.com/thmb/k7e_oqBBS68al_P26L6EXxVxx3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/000220540-2000-f0bae8f5f39f451582bb1453c84bb43a.jpg";
   let book3 = "https://s26162.pcdn.co/wp-content/uploads/2021/10/The-Catcher-in-the-Rye-First-Edition-cover-E.-Michael-Mitchell.jpg";

   return (
      <div className={appCSS.similarComponents}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Great Gatsby" />
         <img src={book2} alt="To Kill A Mockingbird" />
         <img src={book3} alt="The Catcher in the Rye" />
      </div>      
   );
}