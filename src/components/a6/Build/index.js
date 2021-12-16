import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import Home from './HomeScreen';

import {BrowserRouter, Route} from "react-router-dom";

const Build = () => {
  return(
      <>

      <BrowserRouter>
        <Route path="/a6/twitter/home">
            <Home/>
        </Route>
        <Route path="/a6/twitter/explore">
            <ExploreScreen/>
        </Route>
      </BrowserRouter>
        <Link to="/a6/hello">
          Hello
        </Link> |
        <Link to="/a6/practice">
          Practice
        </Link>
      </>
  )
};
export default Build;
