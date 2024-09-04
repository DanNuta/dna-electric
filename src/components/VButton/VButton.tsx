import React from "react";
import { VButtonView } from "./VButton.view";

type Props = {
  bg?: string;
  padding?: string;
  color?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const VButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <VButtonView
      color={props.color}
      padding={props.padding}
      style={props.bg}
      onClick={props.onClick}>
      {props.children}
    </VButtonView>
  );
};
