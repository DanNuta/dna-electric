import React, { PropsWithChildren } from "react";

import { VPersonalView } from "./VPersonal.view";
import { PersonalModel } from "../../models/personal.model";

type Props = {
  data: PersonalModel;
};

export const VPersonal: React.FC<PropsWithChildren<Props>> = (props) => {
  return <VPersonalView data={props.data} />;
};
