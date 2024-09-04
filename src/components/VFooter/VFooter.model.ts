/* eslint-disable max-lines */
import styled from "styled-components";
import { Container } from "@mui/material";

import { theme, rootColor } from "../../components/styles/Theme";

export const DesktopBg = styled.div`
  ${theme.breakpoints.up("lg")} {
    display: block;
    background-color: ${rootColor.secondary};
    margin-top: 115px;
  }
`;

export const ContainerStyle = styled(Container)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  background-color: ${rootColor.secondary};
  margin-top: 45px;
  color: white;
  padding: 40px 0 0 0;
  width: 100%;
  max-width: 1536px;

  ${theme.breakpoints.up("lg")} {
    display: flex !important;
    flex-direction: row;
    background-color: transparent;
    width: 100%;
    max-width: ${theme.breakpoints.values.xl + "px"} !important;
    margin: auto;
    gap: 60px;
  }

  .arrow_up {
    display: none;
    cursor: pointer;

    ${theme.breakpoints.up("lg")} {
      display: block;
    }
  }
`;

export const LogoProgramDiv = styled.div`
  ${theme.breakpoints.up("lg")} {
    width: 505px;
  }

  a {
    color: white;
  }

  .logo {
    display: flex;
    justify-content: center;

    ${theme.breakpoints.up("lg")} {
      justify-content: flex-start;
      margin-bottom: 40px;
    }
    img {
      width: 60%;
    }
  }

  ul {
    margin-top: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    ${theme.breakpoints.up("lg")} {
      text-align: left;
      justify-content: flex-start;
      align-items: flex-start;
    }

    li {
      display: flex;
      gap: 15px;
      align-items: center;

      ${theme.breakpoints.up("lg")} {
        margin-bottom: 25px;
      }

      img {
        width: 20%;
      }

      &:nth-child(3) {
        width: 80%;

        img {
          width: 10%;
        }
      }
    }
  }
`;

export const MapsDiv = styled.div`
  ${theme.breakpoints.up("lg")} {
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;
    color: white;

    ${theme.breakpoints.up("lg")} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 30px;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px 30px;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      ${theme.breakpoints.up("lg")} {
        gap: 60px;
        flex-wrap: nowrap;
        height: 100%;
        margin: 0;
      }
    }

    li {
      text-align: center;
      width: 40%;

      a {
        color: white;
      }
    }
  }

  .social_media {
    margin: 15px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    ${theme.breakpoints.up("lg")} {
      margin: 0;
    }

    li {
      img {
        width: 15%;

        ${theme.breakpoints.up("lg")} {
          width: 100%;
        }
      }

      a {
        color: white;
      }
    }
  }

  .map {
    width: 90%;
    height: 152px;
    margin: auto;

    ${theme.breakpoints.up("lg")} {
      width: 100%;
      height: 180px;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

export const FooterParaghraph = styled.p`
  text-align: center;
  background-color: #272727;
  color: white;
  padding: 2rem 0 1rem 0;
`;
