/* eslint max-lines: off */
import React, { PropsWithChildren, useContext } from "react";
import { Link } from "react-router-dom";

import { facebookIcon } from "../../icons/custom";
import Logo from "../../icons/logo/logo.svg";
import Youtube from "../../icons/social_media_icon/youtube.svg";
import * as Styled from "./Navbar.module";
import hanburgher from "../../icons/hamburger/menu.svg";
import { VButton } from "../../components/VButton/VButton";
import wishList from "../../icons/card_product_icon/wish_list.svg";
import { MobileResponsive } from "../Navbar/MobileSlide/Mobile";
import { WishlistEl } from "../../pages/Wishlist/Wishlist";
import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";
import wishlist from "../../icons/hover_icon/wishlist_nav.svg";
import { NavbarContext } from "../../context/Context.navbar";
import { NavbarContextModel } from "../../models/NavbarContext.model";

type Props = {
  toggleState: boolean;
  toggle: () => void;
  bg: string;
  onClick: () => void;
  wishlist: boolean;
};

export const NavbarView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { data, isPending } = useContext(NavbarContext) as NavbarContextModel;
  const { wishlistState } = useContext(WishlistContext) as Wishlist;
  const checkProducts = wishlistState.length == 0 ? false : true;

  return (
    <>
      <Styled.NavbarNav display="none" bg={props.bg}>
        <Styled.NavbarUl type="center">
          <Styled.NavLi>
            <Link to="/">
              <img src={Logo} />
            </Link>
          </Styled.NavLi>
        </Styled.NavbarUl>

        <Styled.NavbarUl>
          <Styled.NavLi>
            <VButton padding="0" onClick={props.toggle}>
              <img src={hanburgher} />
            </VButton>
          </Styled.NavLi>

          <Styled.NavLi>9:00 AM - 19:00 PM</Styled.NavLi>

          <Styled.NavLi onClick={props.onClick}>
            <img src={wishList} />
          </Styled.NavLi>
        </Styled.NavbarUl>
      </Styled.NavbarNav>

      {!isPending && (
        <Styled.TabletNav display="block" bg={props.bg}>
          <Styled.MaxWidthTablet>
            <Styled.TabletUl gap="1rem">
              <li>
                <Link to="/">
                  <img src={Logo} alt="wish_list" />{" "}
                </Link>{" "}
              </li>
              <li>9:00 - 19:00</li>
            </Styled.TabletUl>

            <Styled.TabletUl width="100" gap="1rem">
              <li>
                <Link to="/">Acasa</Link>
              </li>
              <li>
                <Link to={data.impamantare}>{data.impamantare}</Link>
              </li>
              <li>
                <Link to={data.paratrasnet}>{data.paratrasnet}</Link>
              </li>
              <li>
                <Link to={data.supratensiune}>{data.supratensiune}</Link>
              </li>
              <li>
                <Link to={data.articole}>{data.articole}</Link>
              </li>
              <li>
                <Link to={data.contacte}>{data.contacte}</Link>
              </li>
            </Styled.TabletUl>

            <Styled.TabletUl gap="2rem">
              <li>
                <a href={`tel: ${data.Nr_telefon}`}>{data.Nr_telefon}</a>
              </li>
              <li>
                <a href={data.Link_facebook} target="_blank">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href={data.Link_youtube} target="_blank">
                  <img src={Youtube} alt="youtube" />
                </a>
              </li>
              <li onClick={props.onClick}>
                <img src={wishlist} alt="wish_list" />
              </li>
              <li>
                <a href="https://www.paratrasnet.shop" target="_blank">
                  <img src={wishList} alt="wishlist" />
                </a>
              </li>
            </Styled.TabletUl>
          </Styled.MaxWidthTablet>
        </Styled.TabletNav>
      )}

      <Styled.MobileNavDiv toggle={props.toggleState}>
        <MobileResponsive
          stateCkeck={props.toggleState}
          toggle={props.toggle}
        />
      </Styled.MobileNavDiv>

      {checkProducts && (
        <WishlistEl wishListToggle={props.wishlist} onClick={props.onClick} />
      )}
    </>
  );
};
