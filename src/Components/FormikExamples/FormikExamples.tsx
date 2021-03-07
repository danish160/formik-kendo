import "react-app-polyfill/ie11";
import * as React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import FormikBasic from "./FormikBasic";
import FormikArray from "./FormikArray";

const FormikExamples = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h3>Formik Examples</h3>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={`${url}/basic`}
          >
            Basic
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={`${url}/array`}
          >
            Array
          </NavLink>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              {/* <Route exact path={path}>
                <h5>Please select.</h5>
              </Route> */}
              <Route path={`${path}/basic`}>
                <FormikBasic />
              </Route>{" "}
              <Route path={`${path}/array`}>
                <FormikArray />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormikExamples;
