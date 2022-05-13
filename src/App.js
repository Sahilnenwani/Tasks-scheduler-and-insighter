import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignUPpage from "./screens/SignUp/SignUppage"
import { HomePage } from "./screens/HomeScreen/HomePage";
import LoginPage from "./screens/Login/LoginPage";


function App() {
  return (
 
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>} />

          
          <Route   path="/home" element={<HomePage/>} />
          

          <Route  path="/signup" element={<SignUPpage/>} />
        </Routes>

        </BrowserRouter>

    </div>
 
  );
}

export default App;
