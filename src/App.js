import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUPpage from "./screens/SignUp/SignUppage"
import { HomePage } from "./screens/HomeScreen/HomePage";
import LoginPage from "./screens/Login/LoginPage";


function App() {
  return (
 
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />

          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signup" component={SignUPpage} />
        </Switch>
      </Router>

    </div>
 
  );
}

export default App;
