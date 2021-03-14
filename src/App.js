import Home from './page/home/home.js'
import Register from './page/register/register.js'
import Login from './page/login/login.js'
import Profile from './page/profile/profile.js'
import {BrowserRouter,Router,Route} from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
                    <Route  exact={true} path="/" component={Profile}></Route>
                    <Route  path="/Login" component={Login}></Route>
                    <Route  path="/Profile" component={Home} ></Route>
                    <Route  path="/Register" component={Register} ></Route>
        </BrowserRouter>
    )
}

export default App;