import styled from "styled-components";

import { theme, rootColor, displayFlex } from "../styles/Theme";

type Props = {
  scroll?: number;
};

export const CardDiv = styled.div`
  box-shadow: 4px 1px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${theme.breakpoints.up("lg")} {
    cursor: pointer;
    &:hover {
      background-color: ${rootColor.primary};
    }
  }

  h1 {
    font-size: 10px;
    text-align: center;
    padding: 28px 10px;

    ${theme.breakpoints.up("lg")} {
      padding: 82px 70px;
      font-size: 22px;
    }
  }

  p {
    position: absolute;
    box-shadow: 4px 1px 10px 0px rgba(0, 0, 0, 0.1);
    top: 100%;
    background-color: white;
    padding: 5px;
    z-index: 10;

    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  }
`;

export const CeOferim = styled.div<Props>`
  backdrop-filter: blur(13.5px);
  background: rgba(39, 39, 39, 0.64);
  width: 100%;
  height: 1000px;
  position: absolute;
  top: ${(props) => props.scroll + "px"};

  ${displayFlex({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  })};
`;

export const CeOferimInfo = styled.div`
  display: none;

  ${theme.breakpoints.up("lg")} {
    display: block;
    width: 980px;
    background-color: ${rootColor.secondary};
    color: white;
    padding: 70px 60px;
    ${displayFlex({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    })}
  }

  p {
    text-align: center;
    margin: 45px 0 35px 0;
  }
`;

export const Model = styled.div`
  display: none;

  ${theme.breakpoints.up("lg")} {
    display: block;
  }
`;
