import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// VIEWS
import Home from "./views/Home/Home.jsx";
import Clima from "./views/Clima";

//styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact> 
        <Home/>
      </Route>
      <Route path="/clima:name" exact>
        <Clima/>
      </Route>
      <Route path="*">
        <h2>Not Found</h2>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
