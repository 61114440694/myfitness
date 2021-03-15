import Home from "./page/home/home.js";
import Register from "./page/register/register.js";
import Login from "./page/login/login.js";
import Profile from "./page/profile/profile.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./page/contexts/AuthContext";
import Main from "./page/home/main.js";
import PrivateRoute from "./page/home/privateRoute";
import ForgotPassword from "./page/home/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route exact={true} path="/home" component={Home}></Route>
          <PrivateRoute path="/main" component={Main}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forgot-password" component={ForgotPassword}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
