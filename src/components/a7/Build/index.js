import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import who from "../../../../src/reducers/who";
import tweets from "../../../../src/reducers/tweets";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who: who})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Build = () => {
  return(
      <Provider store={store}>
        <div>
          <Route path={["/", "/a7/twitter/home"]}
                 exact={true} component={HomeScreen}/>
          <Route path="/a7/twitter/explore"
                 exact={true} component={ExploreScreen}/>
        </div>
        {/*<ExploreScreen/>*/}
        {/*<Link to="/a6/hello">*/}
        {/*  Hello*/}
        {/*</Link> |*/}
        {/*<Link to="/a6/practice">*/}
        {/*  Practice*/}
        {/*</Link>*/}
      </Provider>
  );
};
export default Build;
