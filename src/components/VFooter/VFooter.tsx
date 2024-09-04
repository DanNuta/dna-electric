import React, { PropsWithChildren, useContext } from "react";

import { VFooterView } from "./VFooter.view";

import { NavbarContext } from "../../context/Context.navbar";
import { NavbarContextModel } from "../../models/NavbarContext.model";

export const VFooter: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel;

  return <VFooterView data={data}>{props.children}</VFooterView>;
};
