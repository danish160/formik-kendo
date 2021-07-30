import React, { useState } from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Topics = () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  let categories = [
    {
      CategoryID: 1,
      CategoryName: "Beverages",
    },
    {
      CategoryID: 2,
      CategoryName: "Condiments",
    },
    {
      CategoryID: 3,
      CategoryName: "Confections",
    },
    {
      CategoryID: 4,
      CategoryName: "Dairy Products",
    },
    {
      CategoryID: 5,
      CategoryName: "Grains/Cereals",
    },
    {
      CategoryID: 6,
      CategoryName: "Meat/Poultry",
    },
    {
      CategoryID: 7,
      CategoryName: "Produce",
    },
    {
      CategoryID: 8,
      CategoryName: "Seafood",
    },
  ];

  const [category, setCategory] = useState(null);

  const handleDropDownChange = (e: any) => {
    setCategory(e.target.value.CategoryName);
  };

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>

          {category ? <p>current state: {category}</p> : ""}

          <p>
            <DropDownList
              data={categories}
              dataItemKey="CategoryID"
              textField="CategoryName"
              defaultItem={{
                CategoryID: null,
                CategoryName: "Product categories",
              }}
              onChange={handleDropDownChange}
            />
          </p>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams<{ topicId: string }>();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
};

export default Topics;
