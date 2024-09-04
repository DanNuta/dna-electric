import styled from "styled-components";
import { Container } from "@mui/material";

import { theme } from "../styles/Theme";

type Props = {
  type?: string;
  bg?: string;
  state?: string;
  toggle?: boolean;
  display?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  center?: string;
  gap?: string;
  width?: string;
};

const displayFlex = (props: Props) => `
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;

export const NavbarNav = styled.nav<Props>`
  position: relative;
  padding: 1.5rem;
  z-index: 10;
  background-color: ${(props) => props.bg};

  ${theme.breakpoints.up("lg")} {
    display: ${(props) => props.display};
  }
`;

export const NavbarUl = styled.ul<Props>`
  display: flex;
  justify-content: ${(props) =>
    props.type === "center" ? "center" : "space-between"};
  align-items: center;
`;

export const NavLi = styled.li<Props>`
  color: white;

  img {
    cursor: pointer;
  }
`;

export const NavMobile = styled.div``;

export const MobileNavDiv = styled.div<Props>`
  position: absolute;
  padding: 10px 47px;
  top: 0;
  bottom: -2600%;
  right: 0;
  left: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(39, 39, 39, 0.6);
  z-index: 999;
  transform: ${(props) =>
    props.toggle ? "translateX(-100%)" : "ranslateX(0)"};
  transition: 0.5s;

  ${theme.breakpoints.up("lg")} {
    display: none;
  }
`;

export const TabletNav = styled.div<Props>`
  display: none;
  position: relative;
  z-index: 2;

  ${theme.breakpoints.up("lg")} {
    width: 100%;
    background-color: ${(props) => props.bg};
    height: 110px;
    display: flex;
  }
`;

export const MaxWidthTablet = styled(Container)`
  display: none;

  ${theme.breakpoints.up("lg")} {
    ${displayFlex({
      display: "flex !important ",
      justifyContent: "space-between !important",
      alignItems: "center !important",
      gap: "1rem !important"
    })};

    max-width: 1536px !important;
    width: 100% !important;
  }
`;

export const TabletUl = styled.ul<Props>`
  ${displayFlex({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })};
  gap: ${(props) => props.gap};

  width: ${(props) => props.width && "45%"};

  li {
    color: white;
    cursor: pointer;

    a {
      color: white;
    }
  }
`;
