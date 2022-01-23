
import './App.css';
import AdminHome from "./Pages/AdminHome";
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

            <Route path="/about">

            </Route>
            {/* Can also use a named `children` prop */}
            {/*<Route path="/users/:id" children={<User />} />*/}
        </Switch>

    </>


  );
}

export default App;
