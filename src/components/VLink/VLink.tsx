import React, { PropsWithChildren } from "react";

import { LinkView } from "./VLink.view";

type Props = {
  link: string;
  bg?: string;
  color?: string;
  onClick?: () => void;
  width?: string;
};

export const LinkCOmponent: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <LinkView
      width={props.width}
      onClick={props.onClick}
      color={props.color}
      bg={props.bg}
      link={props.link}>
      {props.children}
    </LinkView>
  );
};
