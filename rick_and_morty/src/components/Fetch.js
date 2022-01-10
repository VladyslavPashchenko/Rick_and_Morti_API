// import Navbar from "../components/Navbar/Navbar";
// import CharacterList from "./CharacterList/Card"
// import React, { useEffect, useState } from "react";


// function Fetch() {
//   const [characters, setCharacters] = useState([]);
//   const [info, setInfo] = useState({});
//   const url = "https://rickandmortyapi.com/api/character";

//   const fetchCharacters = (url) => {
//     fetch(url)
//       .then(response => response.json())
//       .then((data) => {
//         setCharacters(data.results);
//         setInfo(data.info);
//       })
//       .catch(error => console.log(error));
//   };

//   const handleNextPage = () => {
//     fetchCharacters(info.next);
//     window.scrollTo(0, 0);
//   };

//   const handlePreviousPage = () => {
//     fetchCharacters(info.prev);
//     window.scrollTo(0, 0);
//   };

//   useEffect(() => {
//     fetchCharacters(url);
//   }, []);

//   return (
//     <>
//       <Navbar brand="The Rick and Morty API" />

//       <div className="container">
//         <nav>
//           <ul className="pagination">
//             {info.prev ? (
//               <li className="page-item">
//                 <button className="page-link" onClick={handlePreviousPage}>
//                   Previous
//                 </button>
//               </li>
//             ) : null}
//             {info.next ? (
//               <li className="page-item">
//                 <button className="page-link" onClick={handleNextPage}>
//                   Next
//                 </button>
//               </li>
//             ) : null}
//           </ul>
//         </nav>
//       </div>
//       <CharacterList characters={characters} />
//     </>
//   );
// }

// export default Fetch;

<Router>
      <div className="App">
      </div>
      <Switch>
        <Route path="/">
          <CardDetails />
        </Route>
      </Switch>
    </Router>