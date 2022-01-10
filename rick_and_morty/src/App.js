import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import TEST from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";


function App() {
  return (
    <Router>
      <div className="App">
      </div>
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
  let [pageNumber] = useState(1);
  let [status] = useState("");
  let [gender] = useState("");
  let [species] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search] = useState("");
  let { results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <TEST />
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;