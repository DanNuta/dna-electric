import React, { PropsWithChildren } from "react";

import { VImputView } from "./VImport.view";

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

export const VImput: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <VImputView
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      label={props.label}
      onChangeArea={props.onChangeArea}
      nameState={props.nameState}>
      {props.children}
    </VImputView>
  );
};
