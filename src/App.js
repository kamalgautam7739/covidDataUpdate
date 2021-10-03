import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NewComponent from "./NewComponent";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <NewComponent></NewComponent>
            </Route>
            <Route exact path="/about">
              <div>Hari</div>
            </Route>
          </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
