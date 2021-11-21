import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path={["", "/a8", "/a8/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a8/twitter/*">
            <Build/>
          </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;


