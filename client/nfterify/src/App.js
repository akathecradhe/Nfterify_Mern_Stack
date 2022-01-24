
import './App.css';
import AdminHome from "./Pages/AdminHome";
import Register from './components/Register'
import Login from './components/Login'
import NavBar from "./components/NavBar";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


function App() {
  return (
    <>
        <NavBar />

        <Switch>
            <Route exact path="/">
                <AdminHome/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/register">
                <Login/>
            </Route>
            {/* Can also use a named `children` prop */}
            {/*<Route path="/users/:id" children={<User />} />*/}
        </Switch>

    </>


  );
}

export default App;
