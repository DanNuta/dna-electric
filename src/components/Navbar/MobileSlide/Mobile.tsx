import React from "react";

import { MobileResponsiveView } from "./Mobile.view";

type Props = {
  toggle: () => void;
  stateCkeck: boolean;
};

export const MobileResponsive: React.FC<Props> = ({ stateCkeck, toggle }) => {
  return <MobileResponsiveView state={stateCkeck} toggle={toggle} />;
};
