import React, { PropsWithChildren, useContext } from "react";
import { EtapeleDeLucruModel } from "../../../models/etapeleDeLucru";
import * as Style from "./EtapeleDeLucru.module";
import { LinkCOmponent } from "../../../components/VLink/VLink";
import { NavbarContext } from "../../../context/Context.navbar";
import { NavbarContextModel } from "../../../models/NavbarContext.model";

type Props = {
  data: EtapeleDeLucruModel[];
};

export const EtapeleDeLucruView: React.FC<PropsWithChildren<Props>> = (
  props
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel;
  return (
    <Style.EtapeleDeLucruDiv>
      <h1 className="title">Etapele de lucru</h1>

      {props.data &&
        props.data.map((item, index) => (
          <Style.EtapeleLucruItemDiv key={index}>
            <div className="title_img">
              <h1>{index + 1}</h1>
              <h1>{item.title}</h1>
            </div>

            <div className="img">
              <img src={item.img} alt="" />
            </div>
          </Style.EtapeleLucruItemDiv>
        ))}

      <LinkCOmponent bg="#272727" color="white" link={data.contacte}>
        Contacteaza-ne
      </LinkCOmponent>
    </Style.EtapeleDeLucruDiv>
  );
};
