import "react-app-polyfill/ie11";
import * as React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import AsynchronousValidation from "./AsynchronousValidation";
import StronglyTyped from "./StronglyTyped/StronglyTyped";

const FinalForm = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h3>React Final Form Examples</h3>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={`${url}/AsynchronousValidation`}
          >
            Async Validation
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="active"
            to={`${url}/StronglyTyped`}
          >
            Strongly Typed Fields
          </NavLink>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path={`${path}/AsynchronousValidation`}>
                <AsynchronousValidation />
              </Route>

              <Route path={`${path}/StronglyTyped`}>
                <StronglyTyped />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
