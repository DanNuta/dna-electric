import React, { PropsWithChildren } from "react";

import * as Styled from "./VButton.model";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: string;
  padding?: string;
  color?: string;
};

export const VButtonView: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Styled.Button
      color={props.color}
      padding={props.padding}
      bg={props.style}
      onClick={(e) => props.onClick?.(e)}>
      {props.children}
    </Styled.Button>
  );
};
