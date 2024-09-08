import React, { PropsWithChildren, useContext } from "react";
import { Link } from "react-router-dom";

import * as Style from "../MobileSlide/Mobile.module";
import Cancel from "../../../icons/card_product_icon/cancel_mobile.svg";
import { VButton } from "../../VButton/VButton";
import facebook from "../../../icons/social_media_icon/facebook.svg";
import youtube from "../../../icons/social_media_icon/youtube.svg";
import { NavbarContext } from "../../../context/Context.navbar";
import { NavbarContextModel } from "../../../models/NavbarContext.model";

type Props = {
  toggle: () => void;
  state: boolean;
};

export const MobileResponsiveView: React.FC<PropsWithChildren<Props>> = (
  props
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel;

  return (
    <Style.MobileStyled state={props.state}>
      <Style.MobileLi type="right">
        <VButton onClick={props.toggle}>
          <img src={Cancel} />
        </VButton>
      </Style.MobileLi>

      <Style.MolobleUl>
        <Style.MobileLiElement onClick={props.toggle}>
          <Link to="/">{data.Despre}</Link>
        </Style.MobileLiElement>
        <Style.MobileLiElement onClick={props.toggle}>
          <Link to={data.impamantare}>{data.impamantare}</Link>
        </Style.MobileLiElement>
        <Style.MobileLiElement onClick={props.toggle}>
          <Link to={data.paratrasnet}>{data.paratrasnet}</Link>
        </Style.MobileLiElement>
        <Style.MobileLiElement onClick={props.toggle}>
          <Link to={data.supratensiune}>{data.supratensiune}</Link>
        </Style.MobileLiElement>
        <Style.MobileLiElement onClick={props.toggle}>
          <Link to={data.contacte}>{data.contacte}</Link>
        </Style.MobileLiElement>
      </Style.MolobleUl>

      <Style.MolobleUl>
        <Style.MobileDiv>
          <Style.MobileLiElement>
            <a href={data.Link_facebook} target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </Style.MobileLiElement>
          <Style.MobileLiElement>
            <a href={data.Link_youtube} target="_blank">
              <img src={youtube} alt="Youtube" />
            </a>
          </Style.MobileLiElement>
        </Style.MobileDiv>

        <Style.MobileLiElement color="yolow">
          Program: 9:00 AM - 19:00 PM
        </Style.MobileLiElement>
        <Style.MobileLiElement color="yolow">
          {data.Nr_telefon}
        </Style.MobileLiElement>
      </Style.MolobleUl>
    </Style.MobileStyled>
  );
};
