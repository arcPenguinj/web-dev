import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {Link} from "react-router-dom";
import PracticeA9 from "./components/a9/Practice";
import PracticeA8 from "./components/a8/Practice";
import PracticeA7 from "./components/a7/Practice";
import PracticeA6 from "./components/a6/Practice";
import BuildA9 from "./components/a9/Build";
import BuildA8 from "./components/a8/Build";
import BuildA7 from "./components/a7/Build";
import BuildA6 from "./components/a6/Build";
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from './components/a6/HelloWorld';



function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path={["", "/a9", "/a9/practice"]} exact={true}>
            <PracticeA9/>
          </Route>
          <Route path={["/a8", "/a8/practice"]} exact={true}>
            <PracticeA8/>
          </Route>
          <Route path={["/a7", "/a7/practice"]} exact={true}>
            <PracticeA7/>
          </Route>
          <Route path={["/a6", "/a6/practice"]} exact={true}>
            <PracticeA6/>
          </Route>
          <Route path={["/a6/hello"]} exact={true}>
            <HelloWorld/>
          </Route>
          <Route path="/a9/twitter/*">
            <BuildA9/>
          </Route>
          <Route path="/a8/twitter/*">
            <BuildA8/>
          </Route>
          <Route path="/a7/twitter/*">
            <BuildA7/>
          </Route>
          <Route path="/a6/twitter/*">
            <BuildA6/>
          </Route>
        </div>
        <div>
          <h1>Previous React Assignments:</h1>
          <Link to="/a6">
            A6
          </Link> |
          <Link to="/a7">
            A7
          </Link> |
          <Link to="/a8">
            A8
          </Link>|
          <Link to="/a9">
            A9
          </Link>
        </div>
      </BrowserRouter>
  );
}

export default App;


