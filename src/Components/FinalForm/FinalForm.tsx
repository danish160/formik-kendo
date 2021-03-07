import "react-app-polyfill/ie11";
import * as React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import AsynchronousValidation from "./AsynchronousValidation";

const FinalForm = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h3>Formik Examples</h3>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={`${url}/AsynchronousValidation`}
          >
            AsynchronousValidation
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
              <Route path={`${path}/AsynchronousValidation`}>
                <AsynchronousValidation />
              </Route>{" "}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
