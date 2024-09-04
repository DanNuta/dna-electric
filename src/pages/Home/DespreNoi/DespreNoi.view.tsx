import { FirebaseError } from "firebase/app";
import React, { PropsWithChildren } from "react";

import { DespreNoiModel } from "../../../models/despreeNoi.model";
import * as Style from "./DespreNoi.module";

type Props = {
  data: DespreNoiModel;
  isPending?: boolean;
  error?: FirebaseError | null;
};

export const DespreNoiView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.SectionElement>
      <h1>{props.data.title}</h1>

      <Style.DespreNoiDiv>
        <div className="nr_project_desc">
          <p>{props.data.descrition_project}</p>

          <div className="nr_project">
            <p>{props.data.number_project}+</p>
          </div>
        </div>

        <div className="img_prj">
          <img src={props.data.img} alt="" />
          <p>{props.data.img_description}</p>
        </div>
      </Style.DespreNoiDiv>
    </Style.SectionElement>
  );
};
