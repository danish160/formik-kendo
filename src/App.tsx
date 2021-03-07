import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Topics from "./Components/Topics/Topics";
import FormikExamples from "./Components/FormikExamples/FormikExamples";
import FinalForm from "./Components/FinalForm/FinalForm";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/topics">
                Routing example
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/formik">
                Formik
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/final-form">
                Final form
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main">
        <div className="jumbotron"></div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/topics">
                  <Topics />
                </Route>

                <Route path="/formik">
                  <FormikExamples />
                </Route>

                <Route path="/final-form">
                  <FinalForm />
                </Route>
              </Switch>
            </div>
          </div>

          <hr />
        </div>
      </main>

      <footer className="container">
        <p>&copy; Company 2017-2020</p>
      </footer>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
