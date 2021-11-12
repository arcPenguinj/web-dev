import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a7/Build/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen";




function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path={["", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a7/twitter">
            <Build/>
          </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;


