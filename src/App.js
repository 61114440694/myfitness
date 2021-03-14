import Home from "./page/home/home.js";
import Register from "./page/register/register.js";
import Login from "./page/login/login.js";
import Profile from "./page/profile/profile.js";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./page/contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route exact={true} path="/Home" component={Home}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Profile" component={Profile}></Route>
            <Route path="/Register" component={Register}></Route>
          </Switch>
        </AuthProvider>
      </Router>
    </BrowserRouter>
  );
}

export default App;
