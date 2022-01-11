import "./App.scss";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <CardDetails />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status] = useState("");
  let [gender] = useState("");
  let [species] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;