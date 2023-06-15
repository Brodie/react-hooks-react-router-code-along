import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
