import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// VIEWS
import Home from "./views/Home/Home.jsx";
import About from "./views/About";

//styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact> 
        <Home/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
      <Route path="*">
        <h2>Not Found</h2>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
