import React from "react";
import MyFieldRenderProps from "../StronglyTyped/MyFieldRenderProps";

type Props = MyFieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  return (
    <>
      <div className="form-group row">
        <label className="col-sm-4" htmlFor={input.name}>
          {label}
        </label>
        <div className="col-sm-8">
          <input
            id={input.name}
            type="text"
            {...input}
            {...rest}
            className="form-control"
          />
        </div>
      </div>
      {/* <pre>{JSON.stringify({ input, meta, ...rest }, undefined, 2)}</pre> */}
    </>
  );
};

export default TextInput;
