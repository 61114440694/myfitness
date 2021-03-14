import Home from './page/home/home.js'
import Register from './page/register/register.js'
import Login from './page/login/login.js'
import Profile from './page/profile/profile.js'
import {BrowserRouter,Route, Router} from 'react-router-dom'
import history from './history/history';
function App() {
    return (
        <BrowserRouter>
        <Router history={history}>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route exact={true} path="/Home" component={Home}></Route>
                    <Route  path="/Login" component={Login}></Route>
                    <Route  path="/Profile" component={Profile} ></Route>
                    <Route  path="/Register" component={Register} ></Route>  
        </Router>
                             
        </BrowserRouter>
    )
}

export default App;