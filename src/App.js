import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import ProtectedRoute from "./routes/ProtectRoute";
import ValidRoute from "./routes/ValidRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ValidRoute component={Login} />
            {/* <Login /> */}
          </Route>
          <Route path="/home">
            <ProtectedRoute component={Home} />
            {/* <Home /> */}
          </Route>
          <Route path="/detail/:id">
            <ProtectedRoute component={Detail} />
            {/* <Detail /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
