import styled from "styled-components";

import { theme } from "../../../components/styles/Theme";

type Props = {
  type?: string;
  bg?: string;
  state?: string;
  active?: string;
  display?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  center?: string;
  gap?: string;
};

const displayFlex = (props: Props) => `
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;

export const SudareExotermica = styled.div`
  ${theme.breakpoints.up("lg")} {
    ${displayFlex({ display: "flex", gap: "3rem" })}

    position: relative;
  }
`;

export const HeaderDiv = styled.header``;

export const HeaderDivImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  img {
    width: 100%;
    margin-bottom: 25px;
  }

  a {
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  }
`;

export const HeadersDivText = styled.div`
  ${theme.breakpoints.up("lg")} {
    width: 40%;
    margin-top: 4rem;
  }

  h1 {
  }

  p {
    margin-top: 15px;

    ${theme.breakpoints.up("lg")} {
      margin-bottom: 36px;
    }
  }

  a {
    display: none;
    ${theme.breakpoints.up("lg")} {
      display: block;
    }
  }
`;

export const VCardItemSudare = styled.div`
  ${displayFlex({ display: "flex", gap: "2.5rem" })};
  position: absolute;
  bottom: -20%;
`;
