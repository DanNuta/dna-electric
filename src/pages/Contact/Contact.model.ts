/* eslint-disable max-lines */
import styled from "styled-components";

import { theme } from "../../components/styles/Theme";

type Props = {
  display?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
  center?: string;
};

const displayFlex = (props: Props) => `
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;

export const ContactDiv = styled.div`
  padding: 0 20px;
  margin-top: 45px;

  button {
    display: none;
    ${theme.breakpoints.up("lg")} {
      width: 20%;
      display: block;
      margin: auto;
    }
  }

  h1 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const FormElement = styled.form`
  ${displayFlex({ display: "flex", flexDirection: "column" })};

  .title {
    display: none;
  }

  ${theme.breakpoints.up("lg")} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
    position: relative;

    .title {
      position: absolute;
      display: block;
    }
  }
`;

export const ElementInput = styled.div<Props>`
  .title_mobile {
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  }
  ${(props) =>
    props.center &&
    `${displayFlex({ display: "flex", flexDirection: "column", alignItems: "center" })}`};

  ${theme.breakpoints.up("lg")} {
    width: 100%;
  }

  button {
    display: block;
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  }
`;

export const AboutUsElement = styled.div`
  ${displayFlex({ height: "300px", display: "flex", alignItems: "center" })}
  margin-top: 45px;

  .about_us {
    background-color: rgba(39, 39, 39, 1);
    color: white;
    padding: 36px 20px;
    position: relative;
    width: 100%;

    ${theme.breakpoints.up("lg")} {
      width: 460px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    h1 {
      margin-bottom: 30px;
    }

    .ul_element {
      a {
        color: white;
      }

      ${displayFlex({
        display: "flex",
        flexDirection: "column",
        gap: "15px 0"
      })}

      li {
        ${displayFlex({
          display: "flex",
          alignItems: "center",
          gap: "15px 10px"
        })}

        ${theme.breakpoints.up("lg")} {
          margin-bottom: 45px;
        }

        img {
        }
      }
    }
  }

  .bg_template {
    position: absolute;
    right: 20px;
    height: 300px;
    background-color: rgba(255, 214, 0, 1);
    width: 140px;
    z-index: -1;

    ${theme.breakpoints.up("lg")} {
      height: 450px;
      right: 0;
    }
  }
`;

export const MapDiv = styled.div`
  width: 100%;
  margin-top: 45px;

  ${theme.breakpoints.up("lg")} {
    height: 500px;
  }

  iframe {
    width: 100%;
    border: none;

    height: 100%;
  }
`;
