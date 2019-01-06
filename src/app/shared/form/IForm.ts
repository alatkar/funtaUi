export interface IForms {
  title?: string;
  name?: string;
  type?: InputType;
  placeHolder?: string;
  icon?: string;
}

export enum InputType {
  text,
  email,
  number,
  checkbox,
  file,
  password,
  radio,
  textarea
}
