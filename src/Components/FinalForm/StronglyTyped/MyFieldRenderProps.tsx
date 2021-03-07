import { FieldRenderProps } from "react-final-form";

export interface MyFieldRenderProps<FieldValue, T extends HTMLElement>
  extends FieldRenderProps<FieldValue, T> {
  label?: string;
}

export default MyFieldRenderProps;
