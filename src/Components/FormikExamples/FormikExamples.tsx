import "react-app-polyfill/ie11";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import FormikBasic from "./FormikBasic";

const FormikExamples = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h3>Formik Examples</h3>

      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <Link to={`${url}/basic`}>Basic</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Switch>
              {/* <Route exact path={path}>
                <h5>Please select.</h5>
              </Route> */}
              <Route path={`${path}/basic`}>
                <FormikBasic />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormikExamples;
