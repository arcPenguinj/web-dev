import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Style from "./Styles";
import TodoList from "./Todo/TodoList";


const Practice = () => {
  return(
      <>
        <h1>Practice</h1>
        <TodoList/>
        <Style/>
        <Classes/>
        <Link to="/a6/hello">
          Hello
        </Link> |
        <Link to="/a6/twitter/explore">
          Build
        </Link>
      </>
  )
};

export default Practice;