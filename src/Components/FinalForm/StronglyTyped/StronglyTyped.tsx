import React from "react";
import { Form, Field } from "react-final-form";
import CheckboxInput from "../components/CheckboxInput";
import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import NumberInput from "../components/NumberInput";
import TextAreaInput from "../components/TextAreaInput";
import SelectInput from "../components/SelectInput";
import MultiSelectInput from "../components/MultiSelectInput";
import MultiCheckboxInput from "../components/MultiCheckboxInput";
import {
  KendoDropDown,
  KendoInput,
  KendoNumericTextBox,
  KendoSwitch,
  KendoTextarea,
} from "../components/KendoInput";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Stooge = "larry" | "moe" | "curly";
interface Values {
  firstName?: string;
  lastName?: string;
  employed: boolean;
  favoriteColor?: string;
  toppings?: string[];
  sauces?: string[];
  stooge: Stooge;
  notes?: string;
}

const colors = [
  { value: "", name: "" },
  { value: "#ff0000", name: "❤️ Red" },
  { value: "#00ff00", name: "💚 Green" },
  { value: "#0000ff", name: "💙 Blue" },
];

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const StronglyTyped: React.FC = () => (
  <div>
    <hr />
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: "larry", employed: false }}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field<string>
            name="firstName"
            component={TextInput}
            label="First Name (regular html input)"
            placeholder="First Name"
            required
          />

          <Field
            name="lastName"
            component={KendoInput}
            label="Last Name  (kendo text input)"
            placeholder="Last Name"
            required
          />

          <Field
            name="email"
            component={KendoInput}
            label="Email Address"
            placeholder="Email Address"
            validator={emailValidator}
          />

          <Field
            name="class"
            component={KendoDropDown}
            data={["Economy", "Premium Economy", "Business", "First Class"]}
            label="Choose class"
          />

          <Field name="age" component={KendoNumericTextBox} label="Age" />

          <Field
            name="employed"
            component={KendoSwitch}
            onLabel={"Yes"}
            offLabel={"No"}
            label="Employed"
          />

          <Field
            name="favoriteColor"
            component={KendoDropDown}
            data={colors}
            textField="name"
            dataItemKey="value"
            label="Favorite Color"
          />

          <div>
            <label>Toppings</label>
            <Field<string[]> name="toppings" component={MultiSelectInput}>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div>
          <div>
            <label>Sauces</label>
            <div>
              <label>
                <Field<string>
                  name="sauces"
                  component={MultiCheckboxInput}
                  type="checkbox"
                  value="ketchup"
                />
                Ketchup
              </label>
              <label>
                <Field<string>
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />
                Mustard
              </label>
              <label>
                <Field<string>
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />
                Mayonnaise
              </label>
              <label>
                <Field<string>
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />
                Guacamole 🥑
              </label>
            </div>
          </div>
          <div>
            <label>Best Stooge</label>
            <div>
              <label>
                <Field<Stooge>
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="larry"
                />
                Larry
              </label>
              <label>
                <Field<Stooge>
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="moe"
                />
                Moe
              </label>
              <label>
                <Field<Stooge>
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="curly"
                />
                Curly
              </label>
            </div>
          </div>

          {/* <div>
            <label>Notes</label>
            <Field name="notes" component={TextAreaInput} placeholder="Notes" />
          </div> */}
          <Field
            name="Notes"
            component={KendoTextarea}
            label="Notes"
            placeholder="Notes"
          />

          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              // onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    />
  </div>
);

export default StronglyTyped;
