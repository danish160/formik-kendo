import {
  Input,
  NumericTextBox,
  Switch,
  TextArea,
} from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const kendoHOC = (type, { input, meta, label, ...rest }) => {
  const Type = type;
  if (type === NumericTextBox && input.value === "") {
    input.value = null;
  }
  return (
    <>
      <div className="form-group row">
        <label className="col-sm-4" htmlFor={input.name}>
          {label}
        </label>
        <div className="col-sm-8">
          <Type id={input.name} {...input} {...rest} className="form-control" />

          {meta.error && meta.touched && (
            <span className="k-required">{meta.error}</span>
          )}
        </div>
      </div>
      {/* <pre>{JSON.stringify({ input, meta, ...rest }, undefined, 2)}</pre> */}
    </>
  );
};

const KendoInput = (options) => kendoHOC(Input, options);
const KendoTextarea = (options) => kendoHOC(TextArea, options);
const KendoNumericTextBox = (options) => kendoHOC(NumericTextBox, options);
const KendoDatePicker = (options) => kendoHOC(DatePicker, options);
const KendoDropDown = (options) => kendoHOC(DropDownList, options);
const KendoSwitch = (options) => kendoHOC(Switch, options);
const KendoRadioGroup = (options) => kendoHOC(Input, options); //TODO: pending implementation
const KendoCheckboxList = (options) => kendoHOC(Input, options); //TODO: pending implementation
const KendoListBox = (options) => kendoHOC(Input, options); //TODO: pending implementation

export {
  KendoInput,
  KendoNumericTextBox,
  KendoDatePicker,
  KendoDropDown,
  KendoSwitch,
  KendoTextarea,
  KendoRadioGroup,
  KendoCheckboxList,
  KendoListBox,
};
