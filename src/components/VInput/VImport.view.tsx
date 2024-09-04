import React, { PropsWithChildren } from "react";

import * as Style from "./VImport.model";

import { StateFormModel } from "../../models/stateForm.model";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  nameState: StateFormModel;
};

export const VImputView: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Style.DivForm>
      <label>{props.label}</label>
      <br />
      {props.type !== "textarea" ? (
        <Style.InputTag
          name={props.type}
          css={props.nameState.css}
          value={props.nameState.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange?.(e)}
          id={props.label}
        />
      ) : (
        <Style.TextareaTag
          css={props.nameState.css}
          value={props.nameState.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChangeArea?.(e)}
        />
      )}
      <p>{props.nameState.msj}</p>
    </Style.DivForm>
  );
};
