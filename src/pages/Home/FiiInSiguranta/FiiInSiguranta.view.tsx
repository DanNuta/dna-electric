import { FirebaseError } from "firebase/app";

import * as Styled from "./FiiInSiguranta.model";

import React, { PropsWithChildren, useContext } from "react";
import { fiiInSiguranta } from "../../../models/fiiInSiguranta.model";
import { LinkCOmponent } from "../../../components/VLink/VLink";
import { rootColor } from "../../../components/styles/Theme";
import { NavbarContext } from "../../../context/Context.navbar";
import { NavbarContextModel } from "../../../models/NavbarContext.model";

type Props = {
  data: fiiInSiguranta;
  error: FirebaseError | null;
  isPending: boolean;
};

export const FiiInSigurantaView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel;

  return (
    <>
      <Styled.FiiinSiguranta>
        <h1>{props.data.title}</h1>

        <Styled.DisplayImgP>
          <img src={props.data.img_stanga} alt="" />
          <p>{props.data.description_bottom_title}</p>

          <Styled.BoxYollow>
            <p>{props.data.box_yellow}</p>
          </Styled.BoxYollow>
        </Styled.DisplayImgP>

        <p className="descrition_button">{props.data.description_bottom_img}</p>
      </Styled.FiiinSiguranta>

      <Styled.DesktopElement>
        <Styled.RightElement>
          <img src={props.data.img_stanga} alt="" />
          <p>{props.data.description_bottom_img}</p>
        </Styled.RightElement>

        <Styled.TitleDesc>
          <h1>{props.data.title}</h1>
          <p>{props.data.description_bottom_title}</p>
          <LinkCOmponent bg={rootColor.primary} link={`${data.contacte}`}>
            Contacteaza-ne
          </LinkCOmponent>
        </Styled.TitleDesc>

        <Styled.RightImg>
          <div className="img">
            <img src={props.data.img_dreapta} alt="" />

            <Styled.BoxElement>
              <p>{props.data.box_yellow}</p>
            </Styled.BoxElement>
          </div>
        </Styled.RightImg>
      </Styled.DesktopElement>
    </>
  );
};
